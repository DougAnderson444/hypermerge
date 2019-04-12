/// <reference types="node" />
import Queue from "./Queue";
import { Metadata } from "./Metadata";
import { Actor } from "./Actor";
import { Clock, Change } from "automerge/backend";
import { ToBackendQueryMsg, ToBackendRepoMsg, ToFrontendRepoMsg } from "./RepoMsg";
import * as DocBackend from "./DocBackend";
interface Swarm {
    join(dk: Buffer): void;
    leave(dk: Buffer): void;
    on: Function;
}
export interface FeedData {
    actorId: string;
    writable: Boolean;
    changes: Change[];
}
export interface Options {
    path?: string;
    storage: Function;
}
export declare class RepoBackend {
    path?: string;
    storage: Function;
    joined: Set<string>;
    actors: Map<string, Actor>;
    actorsDk: Map<string, Actor>;
    docs: Map<string, DocBackend.DocBackend>;
    meta: Metadata;
    opts: Options;
    toFrontend: Queue<ToFrontendRepoMsg>;
    swarm?: Swarm;
    id: Buffer;
    file?: Uint8Array;
    constructor(opts: Options);
    private writeFile;
    private readFile;
    private create;
    private debug;
    private inspect;
    private destroy;
    private open;
    merge(id: string, clock: Clock): void;
    close: () => void;
    replicate: (swarm: Swarm) => void;
    private allReadyActors;
    private loadDocument;
    join: (actorId: string) => void;
    leave: (actorId: string) => void;
    private getReadyActor;
    storageFn: (path: string) => Function;
    initActorFeed(doc: DocBackend.DocBackend): string;
    actorIds(doc: DocBackend.DocBackend): string[];
    docActors(doc: DocBackend.DocBackend): Actor[];
    syncReadyActors: (ids: string[]) => void;
    allClocks(actorId: string): {
        [id: string]: Clock;
    };
    private documentNotify;
    private broadcastNotify;
    private actorNotify;
    private initActor;
    syncChanges: (actor: Actor) => void;
    stream: (opts: any) => any;
    subscribe: (subscriber: (message: ToFrontendRepoMsg) => void) => void;
    handleQuery: (id: number, query: ToBackendQueryMsg) => void;
    receive: (msg: ToBackendRepoMsg) => void;
    actor(id: string): Actor | undefined;
}
export {};
