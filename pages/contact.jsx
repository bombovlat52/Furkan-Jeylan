import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';


export default function Home() {
  const { data: _projects } = swr('/api/projects');
  const projects = _projects ? _projects : null;

  return (
    <>
                </a>
                <a target="_blank" rel="norefferer" href="https://www.instagram.com/furkanjeyylan?igsh=bGxodHc2dnl2a2hk&utm_source=qr">
                    <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fab fa-instagram fa-2x" />
                        <p className="font-semibold text-xl">@furkanjeyylan</p>
                    </div>
                </a>
                </a>
                <a href="mailto:furkan.jeylan@sekzollikofen.ch">
                    <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fa fa-envelope fa-2x" />
                        <p className="font-semibold text-xl">furkan.jeylan@sekzollikofen.ch</p>
                    </div>
                </a>
            </div>
        </div>
      </div>
    </>
  )
}
