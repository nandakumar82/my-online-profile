import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a Team Lead cum Architect working with Nextgen India Private Ltd with close to 15 years of experience. I love exploring new technologies and often amazed by the progress we as a human species have made so far in the recent years </p>
                    <p>I have started reflecting my ideas and thoughts through the medium of words recently so spelling and grammer mistaks are very often.You can write me back if you spot any and don't want to live anymore :P </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Full Stack Developer</h3>
                    <p>I have experience building cutting edge solutions using React js, Javascript, Microservices using Spring Boot, TDD, BDD, CI/CD, RDBMS & NoSql databases</p>
                    <p>Hands on coding making use of best practices and ensuring deliverable are of high quality</p>
                    <p>Self driven individual who goes the extra mile to achieve sprint goals & commitments</p>
                    <p>Proven ability to work independently as well as in a team setting with minimal supervision</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Team Lead</h3>
                    <p>I have experience leading discrete high performance teams in an Agile setting</p>
                    <p>Building & Mentoring to get the best out from the team</p>
                    <p>Follow mobbing techniques within the team to develop highly optimized code </p>
                    <p>Making sense out of abstract requirements</p>
                    <p>Effectively interacting with the stake holders and raising concerns proactively</p>
                    <p>Effectively following the scrum ceremonies and adhering to sprint goals & commitments</p>
                    <p>Following the T shaped working model</p>
                    <p>Performing code reviews</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Architect</h3>
                    <p>Participate in performance tuning</p>
                    <p>Monitoring technical debts and contributing to the NFR backlogs </p>
                    <p>Contribution to innovation ideas and working towards bringing them into the product line</p>
                    <p>Instrumental in setting up SonarQube to institutionalize best practices</p>
                    <p>Ability to convert functional spec into technical specs by following UML practices</p>
                    <p>Implement Automation practices wherever appropriate</p>
                    <p>Endeavour to bringing the best practices wherever possible</p>
                </div>
                </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
