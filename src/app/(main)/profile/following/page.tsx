"use client";
import UserList from "@/components/features/profile/UserList";

export default function FollowingPage() {
  const following = [
    {
      id: "f1",
      name: "Odin_Design",
      avatar: "/images/avatars/avatar_09.jpg",
      memberSince: "December 26th, 2013",
      location: "United States",
      reputation: 5,
      items: ["/images/items/westeros_s.jpg", "/images/items/flat_s.jpg", "/images/items/pixel_s.jpg"],
      isFollowing: true,
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
  ];

  return <UserList title="Following (2)" users={following} />;
}
