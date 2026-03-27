"use client";
import UserList from "@/components/features/profile/UserList";

export default function FollowersPage() {
  const followers = [
    {
      id: "f1",
      name: "Thomas_Ket",
      avatar: "/images/avatars/avatar_03.jpg",
      memberSince: "October 8th, 2015",
      location: "United States",
      reputation: 4,
      items: ["/images/items/westeros_s.jpg", "/images/items/flat_s.jpg", "/images/items/pixel_s.jpg"],
      isFollowing: false,
    },
    {
      id: "f2",
      name: "Vynil Brush",
      avatar: "/images/avatars/avatar_11.jpg",
      memberSince: "December 25th, 2014",
      location: "France",
      reputation: 4,
      items: ["/images/items/shadow_s.jpg", "/images/items/monsters_s.jpg", "/images/items/patriot_s.jpg"],
      isFollowing: true,
    },
    {
      id: "f3",
      name: "Haunted Mouse",
      avatar: "/images/avatars/avatar_10.jpg",
      memberSince: "February 14th, 2014",
      location: "England",
      reputation: 3,
      items: ["/images/items/miniverse_s.jpg", "/images/items/city_s.jpg", "/images/items/park_s.jpg"],
      isFollowing: false,
    },
    {
      id: "f4",
      name: "Jenny_Block",
      avatar: "/images/avatars/avatar_14.jpg",
      memberSince: "March 28th, 2013",
      location: "United States",
      reputation: 4,
      items: ["/images/items/mozzarella_s.jpg", "/images/items/samurai_s.jpg", "/images/items/punk_s.jpg"],
      isFollowing: true,
    },
    {
      id: "f5",
      name: "Amy Glush",
      avatar: "/images/avatars/avatar_15.jpg",
      memberSince: "May 19th, 2014",
      location: "Brasil",
      reputation: 5,
      items: ["/images/items/buddha_s.jpg", "/images/items/anime_s.jpg", "/images/items/westeros_s.jpg"],
      isFollowing: false,
    },
  ];

  return <UserList title="Followers (5)" users={followers} />;
}
