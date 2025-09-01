import Circle from './Bases/Circle';

import {Linkedin} from 'lucide-react';
import {Github} from 'lucide-react';
import {Mail} from 'lucide-react';

export default function Sociais(){
    return (
            <div className="flex flex-row gap-4 p-1">
                {/* <Linkedin color='white'/>
                <Github />
                <Mail /> */}
                <a href="https://www.linkedin.com/in/caduber/" target='_blank'><Circle size={40} color='white' children={<Linkedin/>}></Circle></a>
                <a href="https://github.com/Caduber" target='_blank'><Circle size={40} color='white' children={<Github/>}></Circle></a>
                <a href="mailto:caduberdev@gmail.com" target='_blank'><Circle size={40} color="white" children={<Mail />}/></a>
            </div>
        );
}