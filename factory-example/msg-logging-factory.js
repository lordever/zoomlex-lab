export default class MsgLoggingFactoryExample {
    constructor(msg) {
        this.msg = msg;
    }

    logMsg() {
        console.log(this.msg);
    }

    showCase() {
        this.logMsg();
    }
}