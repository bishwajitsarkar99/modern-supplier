import { useEffect, useRef } from "react";
import { setRAM, getRAM } from "@/helper/memory";
type Direction = "left" | "right" | "top" | "bottom";

interface UseMenuCardResizeProps {
  cardId: string;
}

export function useMenuCardResize({ cardId }: UseMenuCardResizeProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const topRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const svgRectRef = useRef<SVGRectElement | null>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || !cardId) return;

    card.style.position = "absolute";

    const animateBorder = () => {
      const rect = svgRectRef.current;
      if (!rect) return;

      rect.setAttribute("width", String(card.offsetWidth));
      rect.setAttribute("height", String(card.offsetHeight));
      rect.setAttribute("x", "0");
      rect.setAttribute("y", "0");
      rect.setAttribute("rx", "3");
      rect.setAttribute("ry", "3");

      rect.style.display = "block";
      rect.style.stroke = "dodgerblue";
      rect.style.strokeWidth = "3";
      rect.style.strokeDasharray = "5,5";
      rect.style.animation = "dashmove 1s linear infinite";
    };

    const stopBorderAnimation = () => {
      const rect = svgRectRef.current;
      if (!rect) return;
      rect.style.animation = "none";
      rect.style.stroke = "transparent";
      rect.style.display = "none";
    };

    const attachResizer = (
      resizer: HTMLDivElement | null,
      direction: Direction
    ) => {
      if (!resizer) return;

      const onMouseDown = (e: MouseEvent) => {
        e.preventDefault();

        const startX = e.pageX;
        const startY = e.pageY;
        const startWidth = card.offsetWidth;
        const startHeight = card.offsetHeight;
        const startLeft = card.offsetLeft;
        const startTop = card.offsetTop;

        document.body.style.cursor =
          direction === "left" || direction === "right"
            ? "ew-resize"
            : "ns-resize";

        animateBorder();

        const onMouseMove = (ev: MouseEvent) => {
          const dx = ev.pageX - startX;
          const dy = ev.pageY - startY;

          if (direction === "right") {
            card.style.width = `${startWidth + dx}px`;
          }
          if (direction === "left") {
            card.style.width = `${startWidth - dx}px`;
            card.style.left = `${startLeft + dx}px`;
          }
          if (direction === "bottom") {
            card.style.height = `${startHeight + dy}px`;
          }
          if (direction === "top") {
            card.style.height = `${startHeight - dy}px`;
            card.style.top = `${startTop + dy}px`;
          }

          animateBorder();
        };

        const onMouseUp = () => {
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseup", onMouseUp);
          document.body.style.cursor = "";
          stopBorderAnimation();

          setRAM(cardId, "Width", card.offsetWidth);
          setRAM(cardId, "Height", card.offsetHeight);
          setRAM(cardId, "Left", card.offsetLeft);
          setRAM(cardId, "Top", card.offsetTop);
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      };

      resizer.addEventListener("mousedown", onMouseDown);

      return () => resizer.removeEventListener("mousedown", onMouseDown);
    };

    const cleanups = [
      attachResizer(leftRef.current, "left"),
      attachResizer(rightRef.current, "right"),
      attachResizer(topRef.current, "top"),
      attachResizer(bottomRef.current, "bottom"),
    ];

    // Restore state
    const w = getRAM(cardId, "Width");
    const h = getRAM(cardId, "Height");
    const l = getRAM(cardId, "Left");
    const t = getRAM(cardId, "Top");

    if (w) card.style.width = `${w}px`;
    if (h) card.style.height = `${h}px`;
    if (l) card.style.left = `${l}px`;
    if (t) card.style.top = `${t}px`;

    // Resize observer
    const observer = new ResizeObserver(animateBorder);
    observer.observe(card);

    return () => {
      observer.disconnect();
      cleanups.forEach(fn => fn && fn());
    };
  }, [cardId]);

  return {
    cardRef,
    leftRef,
    rightRef,
    topRef,
    bottomRef,
    svgRectRef,
  };
}
