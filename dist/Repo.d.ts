/// <reference types="node" />
import { Options, RepoBackend } from "./RepoBackend";
import { RepoFrontend } from "./RepoFrontend";
import { Handle } from "./Handle";
import { PublicMetadata } from "./Metadata";
import { Clock } from "./Clock";
declare type StreamOptions = unknown;
interface Swarm {
    join(dk: Buffer): void;
    leave(dk: Buffer): void;
    on: Function;
}
export declare class Repo {
    front: RepoFrontend;
    back: RepoBackend;
    id: Buffer;
    stream: (opts: StreamOptions) => unknown;
    create: <T>(init?: T) => string;
    open: <T>(id: string) => Handle<T>;
    destroy: (id: string) => void;
    replicate: (swarm: Swarm) => void;
    fork: (id: string) => string;
    watch: <T>(id: string, cb: (val: T, clock?: Clock, index?: number) => void) => Handle<T>;
    doc: <T>(id: string, cb?: (val: T, clock?: Clock) => void) => Promise<T>;
    merge: (id: string, target: string) => void;
    change: <T>(id: string, fn: (state: T) => void) => void;
    writeFile: <T>(data: Uint8Array, mimeType: string) => string;
    readFile: <T>(id: string, cb: (data: Uint8Array, mimeType: string) => void) => void;
    materialize: <T>(id: string, seq: number, cb: (val: T) => void) => void;
    meta: (id: string, cb: (meta: PublicMetadata | undefined) => void) => void;
    close: () => void;
    constructor(opts: Options);
}
export {};
