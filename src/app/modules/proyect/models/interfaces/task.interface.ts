import { Nivel } from "../enums/nivel.enum";
import { State } from "../enums/state.enum";

export interface IUser{
    email: string;
    password: string;
    profile:Profile;
    data:Data;
}

export interface Data{
    task:Task[];
    team:Team[];
}
export interface Task {
    title: string;
    description: string;
    team: string;
    nivel: Nivel;
    state:State
    date:Date | string;
}
export interface Team {
    title:       string;
    description: string;
    alias:       string;
    dateCreated:   Date;
    friends:     Profile[];
}

export interface Profile {
    name:        string;
    lastName:    string;
    age:         number;
    description: string;
    dateCreated: Date |string;
    titleWork:   string;
    avatar:      string;
    cargo:       string;
}
export interface Tasklist {
    title: string;
    description: string;
    team: Profile[];
    nivel: Nivel;
    state:State
    date:Date | string;
    hour:string;
  }