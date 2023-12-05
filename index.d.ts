import {EventEmitter} from 'events';

declare class RdpClient extends EventEmitter {
    constructor(config?: RDPClientConfig);
    connected: boolean;
    connect(host: string, port: number): RdpClient;
    close(): RdpClient;
    sendPointerEvent(x: number, y: number, button: number, isPressed: boolean): void;
    sendKeyEventScancode(code: number, isPressed: boolean, extended?: boolean): void;
    sendKeyEventUnicode(code: number, isPressed: boolean): void;
    sendWheelEvent(x: number, y: number, step: number, isNegative: boolean, isHorizontal: boolean): void;
}

declare function createClient(config: RDPClientConfig): RdpClient;

declare class RdpServer extends EventEmitter {
    constructor(config: object, socket: any);
    connected: boolean;
    bufferLayer: any;
    tpkt: any;
    x224: any;
    mcs: any;
}

declare function createServer(config: object, next: Function): any;

declare interface RDPClientConfig {
    domain ?: string;
    userName ?: string;
    password ?: string;
    enablePerf ?: boolean;
    autoLogin ?: boolean;
    decompress ?: boolean;
    screen ?: { width: number, height: number };
    locale ?: string;
    logLevel ?: string;
}

export {
    createClient,
    createServer,
    RdpClient,
    RdpServer,
    RDPClientConfig
};

