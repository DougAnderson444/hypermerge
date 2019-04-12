/**
 * Communicate document information required to replicate documents and their actors.
 *
 * TODO: Rename. Discover? Advertise?
 *
 * TODO: Clean up dependency on Metadata. The extension should know its own format and
 * translate that to something metadata can use.
 *
 * TODO: Move more of the logic for which peers to send messages to into this module. Will require
 * a data structure representing the actor/peers/document relationships which this module can operate on.
 */
import * as Metadata from "./Metadata";
import * as Clock from "./Clock";
import * as Peer from "./Peer";
export declare const EXTENSION_V2 = "hypermerge.2";
export declare const EXTENSION_V3 = "hypermerge.3";
export declare const SUPPORTED_EXTENSIONS: string[];
export declare type BroadcastMessage = Metadata.RemoteMetadata | Metadata.NewMetadata;
export declare function broadcast(blocks: Metadata.MetadataBlock[], clocks: {
    [id: string]: Clock.Clock;
}, peers: Iterable<Peer.Peer>): void;
export declare function listen(peer: Peer.Peer, notify: Function): void;
