import classes from '../styles/Button.module.scss'
import { Button } from 'react-scroll';

export default function CustomButton (props) {
    return(
        <Button className={classes.mybutton}
        value={props.children} type='submit' 
        to="projects" spy={true} smooth={true} 
        offset={0} duration={500}/>
    );
}