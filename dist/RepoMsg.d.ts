import { Patch, Change } from "automerge/frontend";
import { PublicMetadata } from "./Metadata";
import * as Actor from "./Actor";
export declare type ToBackendQueryMsg = MaterializeMsg | MetadataMsg;
export declare type ToFrontendReplyMsg = MaterializeReplyMsg | MetadataReplyMsg;
export declare type ToBackendRepoMsg = NeedsActorIdMsg | RequestMsg | CloseMsg | MergeMsg | CreateMsg | OpenMsg | DestroyMsg | DebugMsg | InspectMsg | WriteFile | ReadFile | QueryMsg | Uint8Array;
export interface QueryMsg {
    type: "Query";
    id: number;
    query: ToBackendQueryMsg;
}
export interface ReplyMsg {
    type: "Reply";
    id: number;
    payload: any;
}
export interface MaterializeMsg {
    type: "MaterializeMsg";
    id: string;
    history: number;
}
export interface MetadataMsg {
    type: "MetadataMsg";
    id: string;
}
export interface CreateMsg {
    type: "CreateMsg";
    publicKey: string;
    secretKey: string;
}
export interface WriteFile {
    type: "WriteFile";
    publicKey: string;
    secretKey: string;
    mimeType: string;
}
export interface ReadFile {
    type: "ReadFile";
    id: string;
}
export interface MergeMsg {
    type: "MergeMsg";
    id: string;
    actors: string[];
}
export interface DebugMsg {
    type: "DebugMsg";
    id: string;
}
export interface InspectMsg {
    type: "InspectMsg";
    id: string;
}
export interface OpenMsg {
    type: "OpenMsg";
    id: string;
}
export interface DestroyMsg {
    type: "DestroyMsg";
    id: string;
}
export interface NeedsActorIdMsg {
    type: "NeedsActorIdMsg";
    id: string;
}
export interface RequestMsg {
    type: "RequestMsg";
    id: string;
    request: Change;
}
export declare type ToFrontendRepoMsg = PatchMsg | ActorBlockDownloadedMsg | ActorIdMsg | ReadyMsg | ReadFileReply | ReplyMsg | InspectReplyMsg | Uint8Array;
export interface PatchMsg {
    type: "PatchMsg";
    id: string;
    synced: boolean;
    patch: Patch;
    history: number;
}
export interface MaterializeReplyMsg {
    type: "MaterializeReplyMsg";
    patch: Patch;
}
export interface MetadataReplyMsg {
    type: "MetadataReplyMsg";
    metadata: PublicMetadata | null;
}
export interface ReadFileReply {
    type: "ReadFileReply";
    id: string;
    mimeType: string;
}
export interface InspectReplyMsg {
    type: "InspectReplyMsg";
    id: string;
    actors: Actor.Actor[];
}
export interface ActorIdMsg {
    type: "ActorIdMsg";
    id: string;
    actorId: string;
}
export interface CloseMsg {
    type: "CloseMsg";
}
export interface ReadyMsg {
    type: "ReadyMsg";
    id: string;
    synced: boolean;
    actorId?: string;
    patch?: Patch;
    history?: number;
}
export interface ActorBlockDownloadedMsg {
    type: "ActorBlockDownloadedMsg";
    id: string;
    actorId: string;
    index: number;
    size: number;
    time: number;
}
