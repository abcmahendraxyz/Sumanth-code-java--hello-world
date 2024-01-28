import React from "react";

const Promise = () => {
  const STATE = {
    FULLFILLED: "fullfilled",
    REJECTED: "rejected",
    PENDING: "pending",
  };
  class myPromise {
    #value;
    #state;
    #thenCbs = [];
    #catchCbs = [];
    #onSuccessBind = this.#onSuccess.bind(this);
    #onFailBind = this.#onFail.bind(this);

    constructor(cb) {
      try {
        cb(this.#onSuccessBind, this.#onFailBind);
      } catch (error) {
        this.#onFail(error);
      }
    }

    #runCallback() {
      if (this.#state === STATE.FULLFILLED) {
        this.#thenCbs.forEach((callback) => {
          callback(this.#value);
        });

        this.#thenCbs = [];
      }

      if (this.#state === STATE.REJECTED) {
        this.#catchCbs.forEach((callback) => {
          callback(this.#value);
        });

        this.#catchCbs = [];
      }
    }

    #onSuccess(value) {
      queueMicrotask(() => {
        if (this.#state !== STATE.PENDING) return;

        if (value instanceof myPromise) {
          value.then(this.#onSuccessBind, this.#onFailBind);
        }

        this.#value = value;
        this.#state = STATE.FULLFILLED;
        this.#runCallback();
      });
    }
    #onFail(value) {
      queueMicrotask(() => {
        if (this.#state !== STATE.PENDING) return;

        if (value instanceof myPromise) {
          value.then(this.#onSuccessBind, this.#onFailBind);
        }

        this.#value = value;
        this.#state = STATE.REJECTED;
        this.#runCallback();
      });
    }
    then(thenCallback, catchCallback) {
      return new myPromise((resolve, reject) => {
        this.#thenCbs.push((result) => {
          if (thenCallback === null) {
            resolve(result);
          }

          try {
            resolve(thenCallback(result));
          } catch (error) {
            reject(error);
          }
        });

        this.#catchCbs.push((result) => {
          if (catchCallback === null) {
            reject(result);
          }

          try {
            resolve(catchCallback(result));
          } catch (error) {
            reject(error);
          }
        });

        this.#runCallback();
      });
    }

    catch(cb) {
      return this.then(null, cb);
    }

    finally(cb) {}
  }
  return <div></div>;
};

export default Promise;
