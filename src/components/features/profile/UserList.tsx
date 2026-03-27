"use client";
import Link from "next/link";

interface UserListItemProps {
  user: {
    id: string;
    name: string;
    avatar: string;
    memberSince: string;
    location: string;
    reputation: number;
    items: string[];
    isFollowing: boolean;
  };
}

const UserListItem = ({ user }: UserListItemProps) => {
  return (
    <div className="follow-list-item">
      <Link href="/profile">
        <figure className="user-avatar medium liquid">
          <img src={user.avatar} alt={user.name} />
        </figure>
      </Link>

      <div className="fl-item-info fl-description">
        <p className="text-header"><Link href="/profile">{user.name}</Link></p>
        <p>Member since {user.memberSince}</p>
        <p>{user.location}</p>
      </div>

      <div className="fl-item-info fl-reputation">
        <p className="text-header">Reputation</p>
        <ul className="rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i} className={`rating-item ${i >= user.reputation ? "empty" : ""}`}>
              <svg className="svg-star"><use xlinkHref="#svg-star"></use></svg>
            </li>
          ))}
        </ul>
      </div>

      <div className="fl-item-info fl-product-items">
        {user.items.map((img, i) => (
          <Link key={i} href="/product">
            <figure className="product-preview-image small">
              <img src={img} alt="product" />
            </figure>
          </Link>
        ))}
      </div>

      <div className="fl-item-info fl-button">
        {user.isFollowing ? (
          <a href="#" className="button mid-short primary follow-btn">Following</a>
        ) : (
          <a href="#" className="button mid-short dark">Add to <span className="primary">Followers</span></a>
        )}
      </div>
    </div>
  );
};

export default function UserList({ title, users }: { title: string; users: any[] }) {
  return (
    <div className="user-list-page">
      <div className="headline simple primary">
        <h4>{title}</h4>
      </div>
      <div className="follow-list">
        {users.map((user) => (
          <UserListItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
