import axios from "axios";
import UserProfileData from "../model/UserDataInterface";

interface DOMProfile {
    getData(): void;
}

export default class UserProfile implements DOMProfile {
    private readonly avatarImg: HTMLImageElement;
    private readonly usernameH: HTMLHeadingElement;
    private readonly emailP: HTMLParagraphElement;
    private readonly uidSpan: HTMLSpanElement;
    private readonly genderSpan: HTMLSpanElement;
    private readonly DOBSpan: HTMLSpanElement;
    private readonly titleSpan: HTMLSpanElement;
    private readonly keySkillSpan: HTMLSpanElement;

    static instance: UserProfile = new UserProfile;

    private constructor(){
        this.avatarImg = document.getElementById('avatar') as HTMLImageElement;
        this.usernameH = document.getElementById('username') as HTMLHeadingElement;
        this.emailP = document.getElementById('email') as HTMLParagraphElement;
        this.uidSpan = document.getElementById('uid') as HTMLSpanElement;
        this.genderSpan = document.getElementById('gender') as HTMLSpanElement;
        this.DOBSpan = document.getElementById('DOB') as HTMLSpanElement;
        this.titleSpan = document.getElementById('title') as HTMLSpanElement;
        this.keySkillSpan = document.getElementById('keySkill') as HTMLSpanElement;
    }

    async getData(): Promise<void>{
        try {
            const response: UserProfileData = (await axios.get('https://random-data-api.com/api/v2/users')).data;
            this.render(response);
        } catch (err: any) {
            throw err;
        }
    }

    private render(data: UserProfileData): void {
        this.avatarImg.src = data.avatar;
        this.usernameH.textContent = data.username;
        this.emailP.textContent = data.email;
        this.uidSpan.textContent = data.id;
        this.genderSpan.textContent = data.gender;
        this.DOBSpan.textContent = data.date_of_birth;
        this.titleSpan.textContent = data.employment.title;
        this.keySkillSpan.textContent = data.employment.key_skill;
    }
}