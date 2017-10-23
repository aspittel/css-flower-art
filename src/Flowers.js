import React from 'react'
import './Flowers.css'

const LongPetal = (props) => {
    return <div className="petal" style={{ transform: `rotate(${props.px}deg)` }}></div>
}

const LongPetalFlower = (props) => {
    let petals = []
    for (let i=0; i<=20; i++) {
        petals.push(<LongPetal px={20 * i} key={i}/>)
    }

    let styles = {
        top: props.top,
        left: props.left
    }

    return (
        <div className="flower" style={styles}>
            <div className="center"></div>
            { petals }
        </div>
    )
}

const RoundFlower = (props) => {
    let styles = {
        top: props.top,
        left: props.left
    }
    return <div className="round-flower" style={styles}></div>
}

const Petal = (props) => {
    return (
        <div className="tear-petal" style={{
            transform: `rotate(${props.px}deg)`,
            top: props.top,
            left: props.left
            }}>
        </div>
    )
}

const PetalFlower = (props) => {
    return (
        <div class="flower">
            <Petal px={0} top={props.top} left={props.left} />
            <Petal px={90} top={props.top+50} left={props.left} />
            <Petal px={180} top={props.top+50} left={props.left-50} />
            <Petal px={270} top={props.top+1} left={props.left-50} />
            <div className="tiny-center" style={{top: props.top+50, left: props.left-10}}/>
            <div className="tiny-center" style={{top: props.top+40, left: props.left-5}}/>
            <div className="tiny-center" style={{top: props.top+50, left: props.left}}/>
        </div>
    )
}


const Flowers = (props) => {
    return (
        <div>
            <LongPetalFlower top={100} left={400}/>
            <LongPetalFlower top={50} left={60}/>
            <RoundFlower top={200} left={100}/>
            <RoundFlower top={100} left={500}/>
            <LongPetalFlower top={330} left={120}/>
            <RoundFlower top={450} left={200}/>
            <PetalFlower top={200} left={300}/>
            <PetalFlower top={10} left={230}/>
            <PetalFlower top={300} left={10}/>
            <LongPetalFlower top={400} left={400}/>
            <RoundFlower top={400} left={500}/>
            <PetalFlower top={250} left={500}/>
            <LongPetalFlower top={300} left={650}/>
            <PetalFlower top={450} left={700}/>
            <PetalFlower top={-20} left={700}/>
            <RoundFlower top={200} left={700}/>
            <LongPetalFlower top={20} left={850}/>
            <PetalFlower top={200} left={870}/>
            <RoundFlower top={400} left={850}/>
            <LongPetalFlower top={300} left={1000}/>
            <RoundFlower top={200} left={1050}/>
            <PetalFlower top={400} left={1100}/>
            <PetalFlower top={50} left={1000}/>
            <LongPetalFlower top={500} left={900}/>
            <PetalFlower top={520} left={200}/>
            <RoundFlower top={520} left={400}/>
            <RoundFlower top={500} left={1200}/>
            <LongPetalFlower top={100} left={1150}/>
            <LongPetalFlower top={600} left={400}/>
            <RoundFlower top={300} left={1200}/>
            <LongPetalFlower top={600} left={1300}/>
            <PetalFlower top={50} left={1300}/>
            <PetalFlower top={350} left={1400}/>
            <RoundFlower top={600} left={750}/>
            <PetalFlower top={600} left={1000}/>
        </div>
    )
}

export default Flowers