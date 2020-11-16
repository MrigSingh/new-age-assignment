import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const values = [
  {
    name: 'childPanel1',
    heading: 'Child accordian 1',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    name: 'childPanel2',
    heading: 'Child accordian 2',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    name: 'childPanel3',
    heading: 'Child accordian 3',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    name: 'childPanel4',
    heading: 'Child accordian 4',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    name: 'childPanel5',
    heading: 'Child accordian 5',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    name: 'childPanel6',
    heading: 'Child accordian 6',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  }
]

const useStyles = makeStyles((theme) => ({
  root: {
    width: '74%',
    margin:'50px auto',
  },
  accord: {
    margin: '5px 0',
    boxShadow: 'none',
    position: 'relative',
    background: 'white'
  },
  accordSummary: {
    background: '#222',
    color: 'white'
  },
  accordSummary1: {
    background: '#eee',
    color: '#333'
  },
  accordDetails: {
    display: 'block'
  },
  accordChild: {
    width: '100%',
    boxShadow: 'none',
    borderTop: '1px solid #999',
  },
  accordChildSummary: {
    borderRadius: 0,
    flexDirection: 'row-inverse',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    color: 'white'
  },
  childDetails: {
    borderTop: '1px solid #999',
    fontSize: theme.typography.pxToRem(14),
    color: '#444'
  }
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [expandedChild, setExpandedChild] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleChildChange = (panel) => (event, isExpanded) => {
    setExpandedChild(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion square={true} className={classes.accord} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          className={classes.accordSummary}
          expandIcon={expanded === 'panel1' ? <RemoveIcon className={classes.icon} /> : <AddIcon className={classes.icon} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Parent accordian 1</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordDetails}>
          {values.map(item => 
            <Accordion key={item.name} square={true} className={classes.accordChild} expanded={expandedChild === item.name} onChange={handleChildChange(item.name)}>
            <AccordionSummary
              className={classes.accordChildSummary}
              expandIcon={expandedChild === item.name ? <RemoveIcon /> : <AddIcon  />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>{item.heading}</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.childDetails}>
              {item.content}
            </AccordionDetails>
          </Accordion>)}
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accord} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          className={classes.accordSummary1}
          expandIcon={expanded === 'panel2' ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Parent accordian 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No child available
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accord} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          className={classes.accordSummary1}
          expandIcon={expanded === 'panel3' ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Parent accordian 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No child available
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accord} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          className={classes.accordSummary1}
          expandIcon={expanded === 'panel4' ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Parent accordian 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No child available
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accord} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          className={classes.accordSummary1}
          expandIcon={expanded === 'panel5' ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Parent accordian 5</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No child available
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
