import React from 'react';
import Center from 'react-center';
import axios from 'axios';

class About extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        axios.get("http://10.0.1.164:5000/api/users")
        .then(response => {
            var users = response.data
            console.log (response.data)
        })
    }
    render() {

        return (
            <Center>
                <div style={{ marginBottom: 200, marginTop: 100 }} >
                     <Center>
                         <h2 htmlFor="" id="front-pageText"  >About Us</h2>
                    </Center>
                    <div style={{paddingTop: 20}} >
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione odio rerum qui velit? Unde ipsam, at officia sit adipisci molestias exercitationem, alias nulla tenetur, minima eveniet fuga quibusdam facere!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione odio rerum qui velit? Unde ipsam, at officia sit adipisci molestias exercitationem, alias nulla tenetur, minima eveniet fuga quibusdam facere!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione odio rerum qui velit? Unde ipsam, at officia sit adipisci molestias exercitationem, alias nulla tenetur, minima eveniet fuga quibusdam facere!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione odio rerum qui velit? Unde ipsam, at officia sit adipisci molestias exercitationem, alias nulla tenetur, minima eveniet fuga quibusdam facere!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione odio rerum qui velit? Unde ipsam, at officia sit adipisci molestias exercitationem, alias nulla tenetur, minima eveniet fuga quibusdam facere!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione odio rerum qui velit? Unde ipsam, at officia sit adipisci molestias exercitationem, alias nulla tenetur, minima eveniet fuga quibusdam facere!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione odio rerum qui velit? Unde ipsam, at officia sit adipisci molestias exercitationem, alias nulla tenetur, minima eveniet fuga quibusdam facere!        
                            </p>
                    </div>
                </div>
            </Center>
        )
    }
}

export default About