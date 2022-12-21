import React from "react";
import UserCard from "../components/user/UserCard";
import { server } from "../config/index";
import type { Colleague } from "./api/teams";

export default function Teams({
  forename,
  surname,
  office,
  imgSrc,
}: Colleague) {
  return (
    <UserCard
      forename={forename}
      surname={surname}
      office={office}
      imgSrc={imgSrc}
    />
  );
}

export async function getServerSideProps(context: any) {
  const res = await fetch(`${server}/api/teams`);
  const allColleagues = await res.json();
  const randomNumber = Math.floor(Math.random() * allColleagues.length);
  const randomColleague = allColleagues[randomNumber];

  const resRandomUser = await fetch(`https://randomuser.me/api/`);
  const randomUser = await resRandomUser.json();
  const imgSrc = randomUser.results[0].picture.large;
  return {
    props: {
      ...randomColleague,
      imgSrc,
    },
  };
}
