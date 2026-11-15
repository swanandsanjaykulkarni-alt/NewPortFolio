"use client";

import { useEffect, useRef, useState } from "react";
import type { AnimationEvent } from "react";
import styles from "./ClassroomEntrance.module.css";

type Stage = "opening" | "inside" | "exiting";

const dust = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: `${(i * 43 + 11) % 100}%`,
  delay: `${-(i % 8) * 1.6}s`,
  duration: `${9 + (i % 7)}s`,
  size: `${2 + (i % 3)}px`,
}));

function Door({ className }: { className: string }) {
  return (
    <div className={`${styles.door} ${className}`} aria-hidden="true">
      <div className={styles.archAura} />

      <div className={styles.arch}>
        <div className={styles.archInner}>
          <div className={styles.roomLight} />
          <div className={styles.lightBeam} />

          <div className={styles.doorLeaf}>
            <div className={styles.woodGrain} />
            <div className={styles.brassBorder} />

            <div className={styles.doorPanelTop}>
              <span />
            </div>

            <div className={styles.doorPanelBottom}>
              <span />
            </div>

            <div className={styles.handlePlate}>
              <span className={styles.handle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ClassroomEntrance() {
  const [stage, setStage] = useState<Stage | null>(null);
  const exitRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!stage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [stage]);

  useEffect(() => {
    if (stage !== "inside") return;

    exitRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setStage("exiting");
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [stage]);

  const onEntryEnd = (event: AnimationEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && stage === "opening") {
      setStage("inside");
    }
  };

  const onExitEnd = (event: AnimationEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && stage === "exiting") {
      setStage(null);
    }
  };

  return (
    <>
      {/* Entrance section */}

      <section className={styles.section}>
        <div className={styles.paperTexture} />
        <div className={styles.sideLight} />
        <div className={styles.floorLines} />

        {/* Floating dust particles */}

        <div className={styles.dustLayer} aria-hidden="true">
          {dust.map((item) => (
            <span
              key={item.id}
              className={styles.dust}
              style={{
                left: item.left,
                animationDelay: item.delay,
                animationDuration: item.duration,
                width: item.size,
                height: item.size,
              }}
            />
          ))}
        </div>

        {/* Introduction */}

        <div className={styles.intro}>
          <div className={styles.kicker}>
            <span className={styles.kickerLine} />
            A LITTLE SPACE TO GROW
            <span className={styles.kickerLine} />
          </div>

          <h2>
            Come on in.
            <br />
            <span>Make yourself at my Class.</span>
          </h2>

          <p>
            This is where I learn, experiment, make mistakes
            <br />
            and turn little ideas into something meaningful.
          </p>
        </div>

        {/* Door */}

        <div className={styles.experience}>
          <div className={styles.spotlight} />

          <div className={styles.doorContainer}>
            <div className={styles.doorShadow} />
            <Door className={styles.mainDoor} />
          </div>

          <button
            type="button"
            className={styles.enterButton}
            onClick={() => setStage("opening")}
            disabled={stage !== null}
          >
            <span>ENTER MY CLASSROOM</span>
            <span className={styles.buttonArrow}>↗</span>
          </button>

          <div className={styles.bottomNote}>
            LEARN SOMETHING. CREATE SOMETHING. REPEAT.
          </div>
        </div>
      </section>

      {/* Fullscreen experience */}

      {stage && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label="My classroom"
        >
          {/* Opening transition */}

          {stage === "opening" && (
            <div className={styles.entryScene} onAnimationEnd={onEntryEnd}>
              <div className={styles.entryBackground}>
                <div className={styles.entryLight} />

                <span>EVERY JOURNEY STARTS WITH CURIOSITY</span>
              </div>

              <Door className={styles.transitionDoor} />
            </div>
          )}

          {/* Classroom interior */}

          {(stage === "inside" || stage === "exiting") && (
            <>
              {stage === "exiting" && <Door className={styles.closingDoor} />}

              <div
                className={`${styles.interior} ${
                  stage === "exiting" ? styles.interiorExiting : ""
                }`}
                onAnimationEnd={stage === "exiting" ? onExitEnd : undefined}
              >
                <header className={styles.interiorHeader}>
                  <div className={styles.roomIdentity}>
                    <span className={styles.roomDot} />
                    You're inside
                  </div>

                  <button
                    ref={exitRef}
                    type="button"
                    className={styles.exitButton}
                    onClick={() => setStage("exiting")}
                    disabled={stage !== "inside"}
                  >
                    Leave <span aria-hidden="true">↗</span>
                  </button>
                </header>

                <main className={styles.interiorMain}>
                  <div className={styles.classroomImageWrapper}>
                    <img
                      src="/images/classroom-2.png"
                      alt="My classroom"
                      className={styles.classroomPhoto}
                    />
                  </div>
                </main>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
