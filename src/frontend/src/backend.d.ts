import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface LeaderboardEntry {
    avatarSeed: string;
    rank: bigint;
    playerName: string;
    points: bigint;
}
export interface TrainingGuide {
    title: string;
    tips: Array<string>;
}
export interface Tournament {
    status: TournamentStatus;
    tournamentType: TournamentType;
    date: string;
    game: Game;
    name: string;
    prize: string;
}
export interface MembershipPack {
    features: string;
    name: string;
    price: bigint;
}
export enum Game {
    cod = "cod",
    chess = "chess",
    fortnite = "fortnite",
    valorant = "valorant",
    roblox = "roblox"
}
export enum TournamentStatus {
    upcoming = "upcoming",
    live = "live",
    ended = "ended"
}
export enum TournamentType {
    solo = "solo",
    team = "team"
}
export interface backendInterface {
    getAllLeaderboards(): Promise<Array<[Game, Array<LeaderboardEntry>]>>;
    getAllTrainingGuides(): Promise<Array<[Game, Array<TrainingGuide>]>>;
    getLeaderboard(game: Game): Promise<Array<LeaderboardEntry>>;
    getMembershipPacks(): Promise<Array<MembershipPack>>;
    getTournaments(): Promise<Array<Tournament>>;
    getTrainingGuides(game: Game): Promise<Array<TrainingGuide>>;
}
