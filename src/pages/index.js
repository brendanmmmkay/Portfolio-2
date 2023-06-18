import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Head from 'next/head';
import { motion as m } from "framer-motion";
import Link from "next/link";
import MuxPlayer from "@mux/mux-player-react";
import test1 from "../image/TWimgTest.png"
import test2 from "../image/isoCardDuo.png"
import boschPanel1 from "../image/boschPanel1.png"
import boschPanel2 from "../image/boschPanel2.png"
import boschPanel3 from "../image/boschPanel3.png"
import momentPanel1 from "../image/momentPanel1.png"
import momentPanel2 from "../image/momentPanel2.png"
import momentPanel3 from "../image/momentPanel3.png"

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <head>
        <title>Hi</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
    </div>,
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="absolute z-1 text-gray-900 top-0 left-0 w-full bg-regal-gray lg:px-48 px-16"
    >
      <main>
        <div className='my-96 p-1'>
          <m.h1
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className='text-4xl text-left lg:text-9x1 font-ArgentItalic text-white'>I weave business value with compelling visual storytelling toward impactful design that solves problems for people.
          </m.h1>
        </div>

        <div className="mt-40">
          <h1 className='text-5xl font-ArgentItalic text-white pb-5'>In Search Of</h1>
        </div>
        <div class="grid grid-cols-1 divide-y divide-linear-gray">
          <div></div>
          <div class="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
            <div className="lg:pt-5">           
              <Image
              src={test1}
              width={500}
              height={200} />
              </div>
            <div className="lg:pt-5">
            <MuxPlayer
                streamType="on-demand"
                playbackId="oWqKBxCME02obOSNxtb01T801ew3tcgwwOp5502l7BihPyc"
                metadataVideoTitle="Placeholder (optional)"
                metadataViewerUserId="Placeholder (optional)"
                primaryColor="#FFFFFF"
                secondaryColor="#000000"
                autoplay="muted"
                loop
            />
            </div>
            <div className="lg:pt-5">
            <Link href={"/contact"}>
            <Image
              src={test2}
              width={500}
              height={200} />
              </Link>
            </div>
          </div>
        </div>
        <div class="flex flex-col-reverse">
        <Link href={"/contact"}>
          <div className="font-NeueHaasLight text-sub-gray pt-2 pb-5 tracking-wide">Freelance product design and logo design</div>
          </Link>
          <Link href={"/contact"}>
            <div className="font-NeueHaasRoman text-white pt-5 tracking-wide">A digital design directory</div>
          </Link>
        </div>
        



        <div className="mt-20">
          <h1 className='text-5xl font-ArgentItalic text-white pb-5'>Bosch Courier Connect</h1>
        </div>
        <div class="grid grid-cols-1 divide-y divide-linear-gray">
          <div></div>
          <div class="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
            <div className="lg:pt-5">           
              <Image
              src={boschPanel1}
              width={500}
              height={200} />
              </div>
            <div className="lg:pt-5">
            <Image
              src={boschPanel2}
              width={500}
              height={200} />
            </div>
            <div className="lg:pt-5">
            <Image
              src={boschPanel3}
              width={500}
              height={200} />
            </div>
            </div>
          </div>
        <div class="flex flex-col-reverse">
          <div className="font-NeueHaasLight text-sub-gray pt-2 pb-5 tracking-wide">Product Design, Art Direction, Interaction Design</div>
          <Link href={"/contact"}>
            <div className="font-NeueHaasRoman text-white pt-5 tracking-wide">A safety solution for E-bike couriers</div>
          </Link>
        </div>




        <div className="mt-20">
          <h1 className='text-5xl font-ArgentItalic text-white pb-5'>Moment Energy</h1>
        </div>
        <div class="grid grid-cols-1 divide-y divide-linear-gray">
          <div></div>
          <div class="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
            <div className="lg:pt-5">           
              <Image
              src={momentPanel1}
              width={500}
              height={200} />
              </div>
            <div className="lg:pt-5">
            <Image
              src={momentPanel2}
              width={500}
              height={200} />
            </div>
            <div className="lg:pt-5">
            <Image
              src={momentPanel3}
              width={500}
              height={200} />
            </div>
            </div>
          </div>
        <div class="flex flex-col-reverse">
          <div className="font-NeueHaasLight text-sub-gray pt-2 pb-5 tracking-wide">Branding, Brand Strategy, UX Design</div>
          <Link href={"/contact"}>
            <div className="font-NeueHaasRoman text-white pt-5 tracking-wide">A new brand and website to disrupt the energy industry.</div>
          </Link>
        </div>

        <div className="flex justify-between pt-20">
          <Link href={"/contact"}>
            <h2>Design</h2>
          </Link>
          <div>
            <h2>hi</h2>
          </div>
          <h2>Company</h2>
          <h2>2022</h2>
          <div class="grid grid-cols-2 gap-6">
            <div>
              uh
            </div>
            <div>Box 2</div>
            <div>Box 3</div>
            <div>Box 4</div>
          </div>
          <div class="flex flex-col-reverse">
            <div>01</div>
            <div>02</div>
            <div>03</div>
          </div>
        </div>
        <div>
          <h3>Canadian designs to make you coom.</h3>
          <h3>click contact for cool trans girl to appear.</h3>
        </div>




      </main>
    </m.div>
  )
}
