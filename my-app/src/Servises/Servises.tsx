import type { FC } from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Image,
  Link,
} from '@chakra-ui/react';
import S from './styles.module.css';

const Servises: FC = () => (
  <Box className={S.root} >
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left' className={S.block}>
              <Image
                boxSize='50px'
                src='https://turk-internet.com/wp-content/uploads/2022/08/marti-halka-aciliyor-ticom-scaled.jpg'
                borderRadius="4px"
              />
              <Link href='https://chakra-ui.com'> Marti</Link>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Сервис для проката самакатов и скутеров
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left' className={S.block}>
              <Image
                boxSize='50px'
                src='https://turk-internet.com/wp-content/uploads/2022/08/marti-halka-aciliyor-ticom-scaled.jpg'
                borderRadius="4px"
              />
              <Link href='https://chakra-ui.com'> Marti</Link>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Сервис для проката самакатов и скутеров
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  </Box>
);

export default Servises;