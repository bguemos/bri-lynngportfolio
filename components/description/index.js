import { useEffect, useRef } from "react";
import styles from "./Description.module.css";

export default function Descriptors() {
  const descriptorsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles["descriptor-visible"]);
            entry.target.classList.remove(styles["descriptor-hidden"]);
          } else {
            entry.target.classList.add(styles["descriptor-hidden"]);
            entry.target.classList.remove(styles["descriptor-visible"]);
          }
        });
      },
      { threshold: 0.2 } // 20% of the element is visible
    );

    const descriptors = descriptorsRef.current.querySelectorAll("h3");
    descriptors.forEach((descriptor) => {
      observer.observe(descriptor);
    });

    // Cleanup observer on unmount
    return () => {
      descriptors.forEach((descriptor) => observer.unobserve(descriptor));
    };
  }, []);

  return (
    <div className={styles.descriptors} ref={descriptorsRef}>
      <h3 className={styles["descriptor-hidden"]}>User Experience Designer.</h3>
      <h3 className={styles["descriptor-hidden"]}>Frontend Developer.</h3>
      <h3 className={styles["descriptor-hidden"]}>Graphic Designer.</h3>
    </div>
  );
}
