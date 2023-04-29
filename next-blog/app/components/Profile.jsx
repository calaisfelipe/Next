"use client";
import Image from "next/image";
import profilePhoto from "../../img/ProfileFoto.jpg";
import styles from './Profile.module.css'


export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center py-5 gap-3">
      <div>
        <Image className="rounded-full shadow-2xl " src={profilePhoto} width={250} height={120}></Image>
      </div>

      <h4 className={`${styles.title} text-white text-xl`} >Olá e seja bem-vindo. Eu sou o Felipe !!</h4>
    </div>
  );
}
