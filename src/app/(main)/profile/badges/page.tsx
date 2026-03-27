"use client";
import "@/styles/sass/badges.scss";

export default function AuthorBadgesPage() {
  const badges = [
    { id: 1, title: "Contest Winner", image: "/images/badges/community/contest_b.png", description: "Won a competition in the market.", pinned: false },
    { id: 2, title: "Featured Work", image: "/images/badges/community/featured_b.png", description: "Had 5 or more items featured in the market.", pinned: true },
    { id: 3, title: "Golden Author", image: "/images/badges/community/gold_b.png", description: "Sold more than $20.000 across the market.", pinned: false },
    { id: 4, title: "United States", image: "/images/badges/flags/flag_usa.png", description: "Country of Location: United States", pinned: false },
    { id: 5, title: "Member for 3 Years", image: "/images/badges/community/member_b.png", description: "Has been a member of the market for 3 years.", pinned: true },
    { id: 6, title: "Author Support", image: "/images/badges/community/support_b.png", description: "The author offers support for their items.", pinned: false },
    { id: 7, title: "Friendly Author", image: "/images/badges/community/friendly_b.png", description: "Has followed more than 800 authors in the market.", pinned: true },
    { id: 8, title: "The Messenger", image: "/images/badges/community/messenger_b.png", description: "Refered more than 60 users to the market.", pinned: true },
    { id: 9, title: "Coffee Fueled", image: "/images/badges/community/coffee_b.png", description: "Has more than 50 items across the market.", pinned: false },
    { id: 10, title: "Rainbow Author", image: "/images/badges/community/rainbow_b.png", description: "Has at least one item in each marketplace category.", pinned: false },
    { id: 11, title: "Copyright Hunter", image: "/images/badges/community/hunter_b.png", description: "Protected the community against infringements.", pinned: false },
    { id: 12, title: "The Collectionist", image: "/images/badges/community/collectionist_b.png", description: "Has bought 20 or more items in the market.", pinned: true },
    { id: 13, title: "Heart Collector", image: "/images/badges/community/heart_b.png", description: "Has received more than 10.000 likes.", pinned: true },
    { id: 14, title: "Appreciationist", image: "/images/badges/community/appreciationist_b.png", description: "Has appreciated / rated more than 10 items.", pinned: true },
    { id: 15, title: "People's Person", image: "/images/badges/community/people_b.png", description: "Has more than 500 followers in the market.", pinned: true },
    { id: 16, title: "Market Spelunker", image: "/images/badges/community/spelunker_b.png", description: "Bought an item published more than 2 years ago.", pinned: false },
  ];

  return (
    <div className="author-badges-page">
      <div className="headline simple primary">
        <h4>Author Badges (16)</h4>
      </div>

      <div className="badges-showcase column5-wrap short">
        {badges.map((badge) => (
          <div key={badge.id} className="badges-showcase-item column">
            <figure className={`badge big liquid ${badge.pinned ? 'pinned' : ''}`}>
              <img src={badge.image} alt={badge.title} />
            </figure>
            <p className="text-header">{badge.title}</p>
            <p className="badge-description">{badge.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
