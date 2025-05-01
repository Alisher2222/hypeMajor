import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import styles from "./contentCard.module.css";

export default function ContentCard({ suggestions }) {
  return (
    <div className={styles.grid}>
      {suggestions.map((s) => (
        <Link
          to={`/trendPage/${s.id}`}
          state={{ trend: s }}
          key={s.id}
          className={styles.cardLink}
        >
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={s.image} alt={s.trend} className={styles.image} />
              <span
                className={`${styles.badge} ${
                  s.type === "post"
                    ? styles.post
                    : s.type === "video"
                    ? styles.video
                    : styles.tiktok
                }`}
              >
                {s.type.charAt(0).toUpperCase() + s.type.slice(1)}
              </span>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.title}>{s.trend}</h3>
              <div className={styles.hashtags}>
                {s.hashtags.map((tag) => (
                  <span key={tag} className={styles.hashtag}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className={styles.description}>{s.fullDescription}</p>
              <div className={styles.metaRow}>
                <div>
                  <div className={styles.metaLabel}>Engagement</div>
                  <div className={styles.metaValue}>{s.engagement}</div>
                </div>
                <div>
                  <div className={styles.metaLabel}>Difficulty</div>
                  <div className={styles.metaValue}>{s.difficulty}</div>
                </div>
                <button className={styles.viewMore}>
                  View More <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
