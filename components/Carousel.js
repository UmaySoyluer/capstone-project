import styled from "styled-components";
import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Link from "next/link";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const SliderContainer = styled.div`
  width: 100%;
  height: 15rem;
`;

const Slide = styled.div`
  background-color: var(--color-brand-500);
  display: grid;
  place-items: center;
  color: var(--color-gray-50);
`;

const photos = [
  {
    title: "Umay Soyluer",
    src: "/images/US.png",
    github: "https://github.com/UmaySoyluer",
  },
  {
    title: "Aleksandra Baibik",
    src: "/images/AB.png",
    github: "https://github.com/abaibik",
  },
  {
    title: "Daniel Berneisch",
    src: "/images/DB.png",
    github: "https://github.com/TheRealChio",
  },
  {
    title: "Roland J. Baron",
    src: "/images/RJB.png",
    github: "https://github.com/RolandJBaron",
  },
];

export function Carousel() {
  const { width } = useWindowDimensions();
  const [desktopSliderRef] = useKeenSlider(
    {
      loop: true,
      mode: "free-snap",
      slides: {
        perView: width <= 1280 ? 1 : 3,
        spacing: 15,
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <SliderContainer ref={desktopSliderRef} className="keen-slider">
      {photos.map(({ title, src, github }) => (
        <Slide key={title} className="keen-slider__slide">
          <Link href={github} target="_blank">
            <Slide>
              <Image src={src} alt={title} width={200} height={200} />
              {title}
            </Slide>
          </Link>
        </Slide>
      ))}
    </SliderContainer>
  );
}
