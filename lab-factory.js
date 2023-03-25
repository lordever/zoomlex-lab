import MsgLoggingFactoryExample from "./factory-example/msg-logging-factory.js"

export const LabFactory = {
    makeMsgLogging: () => new MsgLoggingFactoryExample("Hello world")
}

