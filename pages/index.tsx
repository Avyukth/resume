import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex justify-center py-4 ">
      <Head>
        <title>Subhrajit Makur</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="text-left sm:w-11/12 md:w-10/12 lg:w-5/12">
        <div className="grid sm:grid-cols-4 lg:grid-cols-5">
          <div></div>
          <div className="col-span-4 px-4">
            <h1 className="text-4xl font-light">Subhrajit Makur</h1>
            <h2 className="py-2 text-lg font-light text-gray-500">
              Graduate Research Associate
            </h2>
            <div className="leading-sm inline-flex items-center rounded-full border bg-sky-200 px-3 py-1 text-xs uppercase text-sky-700">
              XAI
            </div>
            <div className="leading-sm inline-flex items-center rounded-full border bg-green-200 px-3 py-1 text-xs  uppercase text-green-700">
              HCI
            </div>
            <div className="leading-sm inline-flex items-center rounded-full border bg-violet-200 px-3 py-1 text-xs uppercase text-violet-700">
              Visual Analytics
            </div>
            <p className="py-2 text-justify font-light text-gray-600">
              I am currently a Ph.D. candidate in computer science at{' '}
              <a href="https://www.asu.edu/" className="text-sky-700">
                {' '}
                Arizona State University
              </a>
              . My research is to increase the transparency and interpretability
              of machine learning models by designing and developing interactive
              visual analytics systems that can facilitate users to explore and
              discover potential vulnerabilities of those models in terms of
              adversarial machine learning, graph mining sensitivity, as well as
              algorithmic fairness.
            </p>
            <p className="text-justify font-light text-gray-600">
              At Arizona State University, I work with Dr.{' '}
              <a
                className="text-sky-700"
                href="http://rmaciejewski.faculty.asu.edu/"
              >
                Ross Maciejewski
              </a>{' '}
              as a member of the
              <a href="http://vader.lab.asu.edu/"> VADER lab</a>. My research is
              supported by the U.S. Department of Homeland Security and the{' '}
              <a
                className="text-sky-700"
                href="https://beta.nsf.gov/funding/opportunities/nsf-program-fairness-artificial-intelligence-collaboration-amazon"
              >
                National Science Foundation Program on Fairness in AI in
                collaboration with Amazon
              </a>
              .
            </p>
            <div className="container flex justify-between py-4">
              <div>
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/color/48/000000/google-scholar--v3.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://scholar.google.com/citations?user=iGRSrJUAAAAJ&hl=en&inst=1960582506653781529&oi=ao"
                  >
                    Scholar
                  </a>
                </span>
              </div>
              <div>
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/fluency/48/000000/github.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://github.com/avyukth"
                  >
                    @avyukth
                  </a>
                </span>
              </div>
              <div>
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/color/48/000000/twitter--v1.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://twitter.com/subhrajitdotme"
                  >
                    @subhrajitdotme
                  </a>
                </span>
              </div>
              <div>
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/fluency/48/000000/linkedin.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://www.linkedin.com/in/subhrajitmakur/"
                  >
                    @subhrajitmakur
                  </a>
                </span>
              </div>
              <div>
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/color/48/000000/pdf.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://drive.google.com/file/d/189VB5GSpVpf0IsbdPmmAGDpGsSoBjirP/view"
                  >
                    CV.pdf
                  </a>
                </span>
              </div>
            </div>
            <hr />
          </div>

          {/* Experience Section */}
          <div></div>
          <div className="col-span-4 px-4">
            <h1 className="pt-8 pb-4 text-3xl font-light">Experience</h1>
          </div>

          {/* GSA */}
          <div className="md: pl-4 text-left sm:pl-4 sm:text-left lg:pr-4 lg:text-right">
            <p className="py-4 text-xs font-light">Aug. 2018 - Present</p>
          </div>
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base ">
              Graduate Research Associate
            </h3>
            <h4 className="text-base font-light">
              VADER Lab, Arizona State University, Tempe, AZ{' '}
            </h4>
            <p className="text-sm font-light">
              <span className="text-gray-400">Advisor:</span> Ross Maciejewski
            </p>
            <p className="text-justify text-sm font-light text-gray-500">
              Work as a research assistant for the VADER Lab with the research
              topics in Explainable AI and Visual Analytics. Current
              dissertation topic is 'Explaining the vulnerabilities of machine
              learning models through visual analytics'. Passed dissertation
              prospectus in Fall 2021.
            </p>
            <div className="py-2">
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-sm font-light text-sky-700"
                  href="https://vader.lab.asu.edu/"
                >
                  VADER Lab
                </a>
              </span>
            </div>
          </div>

          {/* Education Section */}
          <div></div>
          <div className="col-span-4 px-4">
            <h1 className="pt-8 pb-4 text-3xl font-light">Education</h1>
          </div>

          {/* Ph.D. */}
          {/* <div className="md: pl-4 text-left sm:pl-4 sm:text-left lg:pr-4 lg:text-right">
            <p className="py-4 text-xs font-light">Aug. 2018 - Present</p>
          </div>
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base">Ph.D. in Computer Science</h3>
            <h4 className="text-base font-light">
              Arizona State University, Tempe, AZ{' '}
            </h4>
            <p className="text-sm font-light">
              <span className="text-gray-400">GPA:</span> 3.69 / 4.0
            </p>
            <p className="text-sm font-light">
              <span className="text-gray-400">Advisor:</span> Ross Maciejewski
            </p>
            <p className="text-sm font-light">
              <span className="text-gray-400">Dissertation:</span> Explaining
              Vulnerabilities in Machine Learning through Visual Analytics
            </p>
            <p className="text-sm font-light">
              <span className="text-gray-400">Committee:</span> Ross
              Maciejewski, Huan Liu, Chris Bryan, and Hanghang Tong
            </p>
          </div> */}

          {/* M.E. */}
          <div className="md: pl-4 text-left sm:pl-4 sm:text-left lg:pr-4 lg:text-right">
            <p className="py-4 text-xs font-light">July. 2017 - May 2019</p>
          </div>
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base ">
              M.Tech. in Computer Science
            </h3>
            <h4 className="text-base font-light">
              Indian Institute of Technology Madras, Chennai, India{' '}
            </h4>
            {/* <p className="text-sm font-light">
              <span className="text-gray-400">GPA:</span> 3.77 / 4.0
            </p> */}
          </div>

          {/* B.E. */}
          <div className="md: pl-4 text-left sm:pl-4 sm:text-left lg:pr-4 lg:text-right">
            <p className="py-4 text-xs font-light">July 2008 - June 2012</p>
          </div>
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base ">B.E. in Computer Science</h3>
            <h4 className="text-base font-light">
              Jadavpur University, Kolkata, India{' '}
            </h4>
          </div>

          {/* Publication Section */}
          <div></div>
          <div className="col-span-4 px-4">
            <h1 className="pt-8 pb-4 text-3xl font-light">Publications</h1>
          </div>

          {/* FairrankVis */}
          <div></div>
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base">
              FairRankVis: A Visual Analytics Framework for Exploring
              Algorithmic Fairness in Graph Mining Models
            </h3>
            <p className="text-sm font-light text-gray-400">
              Subhrajit Makur, Yuxin Ma, Jian Kang, Hanghang Tong, and Ross
              Maciejewski
            </p>
            <h4 className="text-base text-sm font-light italic">
              IEEE Transactions on Visualization and Computer Graphics, 2021{' '}
            </h4>
            <div className="container flex py-2">
              <div className="pr-8">
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/color/48/000000/pdf.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="/PDF/FairRankVis.pdf"
                  >
                    PDF
                  </a>
                </span>
              </div>
              <div className="pr-8">
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/fluency/48/000000/youtube-play.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://youtu.be/WVJ3-UXNxPk"
                  >
                    Video
                  </a>
                </span>
              </div>
              <div className="pr-8">
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/small/96/000000/presentation.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://youtu.be/-pk4VaxJt7I"
                  >
                    Talk
                  </a>
                </span>
              </div>
              <div className="pr-8">
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/color-glass/48/000000/code.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://github.com/VADERASU/fairrankvis"
                  >
                    Code
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Reference Section */}
          <div></div>
          <div className="col-span-4 px-4">
            <h1 className="pt-8 pb-4 text-3xl font-light">Reference</h1>
          </div>

          <div></div>
          <div className="col-span-4 px-4">
            <p>
              Dr. Ross Maciejewski,{' '}
              <span className="font-light">Professor</span>
            </p>
            <p className="text-sm font-light text-gray-500">
              The School of Computing and Augmented Intelligence (SCAI)
            </p>
            <p className="font-light italic text-gray-500">
              Arizona State University
            </p>
            <div className="py-2">
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-sm font-light text-sky-700"
                  href="http://rmaciejewski.faculty.asu.edu/"
                >
                  Homepage
                </a>
              </span>
            </div>
          </div>

          {/* End */}
        </div>
      </main>
    </div>
  )
}

export default Home
