import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
// import { Button } from '@material-ui/core/Button';

class Projects extends Component {

    projects = [

        { href: 'https://kiyapp.herokuapp.com', name: 'Kiyapp', tech: ["React", "Firebase", "Express", "Node", "Mongo"], description: "Find your local sifu!  Kiyap connects you to prospective Martial Arts teachers!  No more guesswork or trial & error!"},

        { href: 'https://modemsoperandi.herokuapp.com/', name: 'Modems Operandi', tech: [ "Python", "MySQL", "handlebars", "Passport js"], description: "Create a gaming PC on a budget!"},

        { href: 'https://pacific-waters-30172.herokuapp.com/', name: 'Book Search', tech: ["React", "Express", "Node", "Mongo"], description: "Search and store your favorite books from Google!"},

        { href: 'https://mikepreston17.github.io/mem-berries/', name: 'Memberries', img: "organic-blueberries.jpg", tech: ["React"],
        description: "A berry-themed memory game.  Click on the berries only once and get a high score!"},

        { href: 'https://mikepreston17.github.io/GifTastic/', name: 'Gif-Tastic', tech: ["html", "CSS", "jQuery", "giphy api"], description: "Search Gifs (...and cats)!" },

        // { href: 'https://github.com/MikePreston17/DynamicXml', name: 'XML To POCOs' },
        // { href: 'https://github.com/MikePreston17/DesignPatterns', name: 'Design Patterns' },
        // { href: 'https://mikepreston17.github.io/RPS-Multiplayer/', name: 'RPS-Multiplayer' },
        // { href: 'https://mikepreston17.github.io/LocoMoment/', name: 'Loco-Moment' },
        // { href: 'https://github.com/MikePreston17/liri-node-app/', name: 'LIRI Bot' },
        // { href: 'https://github.com/MikePreston17/bamazon/', name: 'Bamazon' },
        // { href: 'https://agile-woodland-60817.herokuapp.com/', name: 'Burger' },
        // { href: 'https://desolate-falls-20937.herokuapp.com/', name: 'Friend Finder' },
        // { href: 'https://git.heroku.com/ancient-scrubland-60372.git', name: 'soup-store'}
    ];


    pingAll = () => {
        //TODO: Ping your projects
        // Load the projects list from your html or the first running index.js, where possible for reduced ping-up time.

    }

    componentWillMount() {
        console.log('mounting...')
        this.pingAll();
    }

	render() {
		return (
            <div style={{zIndex: -2}}>
            <ul>
                <h2 style={h2Style}>Projects: </h2>
				{this.projects.map(project => (
                    <DemoCard img={"../images/" + project.img} description={project.description} key={project.name} name={project.name} link={project.href} />

				))}
			</ul>
            </div>
		);
    }
}

const h2Style = {
    color: "#fff",
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    // align: 'center',
    // float: 'center'
}
// const url = './images/organic-blueberries.jpg'
const DemoCard = (props) => (
    <Card shadow={0} style={{width: '512px', margin: 'auto', zIndex: -2}}>

    {/* {console.log(props)} */}
        {
            props.img ?
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://picsum.photos/640/360) center / cover' }}>{props.name}</CardTitle> :
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>{props.name}</CardTitle>
        }
        {
            props.description ?
            <CardText style={{color: '#f20c4a'}}>{props.description}</CardText>:
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
        }

        <CardActions border>
            {/* {console.log('link: ', props.link)} */}
            <Button className="mdl-button" href={props.link} target="_blank" colored>View it!</Button>
            {/* //<li><a href={project.href}>{project.name}</a></li> */}
        </CardActions>

        <CardMenu style={{color: '#fff'}}>
            {/* <IconButton name="share" /> */}
        </CardMenu>
    </Card>
)



export default Projects;