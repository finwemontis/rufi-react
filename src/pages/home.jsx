import React from 'react'
import { Col, Row, Typography, Divider } from 'antd'
import Map from '../components/Map/Map'
// import tree from '../resource/tree_png.PNG'
import curve from '../resource/curve.png'
// import Tree from '../components/Tree/Tree'
const { Text, Title, Paragraph } = Typography

export default function Home() {
  return (
    <>
      <Row>
        <Col span={20} offset={2}>
          <Typography>
            <Title style={{'color': '#0E6655'}}>Rufipogon pan-genome database</Title>
            <Title level={3}>Introduction</Title>
          </Typography>
        </Col>
      </Row>
      <Row>
        <Col span={10} offset={2}>
          <Paragraph>
            Rufipogon pan-genome database. 
            We sequenced the genomes of 148 rice accessions, including all major groups of both wild and cultivated rice, 
            using third-generation sequencing. The genome sequences encompassed all types of variations, including single 
            nucleotide polymorphisms (SNPs), insertions, deletions, and inversions. We focused on visualizing inter-species 
            differences to facilitate the comparison of haplotype variations among different accessions, thereby aiding in 
            the study of functional genes and domestication in rice.
          </Paragraph>
          <Paragraph>
            Pan-genome refers to the total genetic information encompassing all possible forms of organisms within a specific 
            evolutionary lineage. It was initially used in a study of bacterial genomes in 2005. The pan-genome includes the 
            genomic information of multiple individuals and allows for the study of genetic variation at the population level. 
            Through the pan-genome, researchers can gain a more comprehensive understanding of the genetic diversity within a 
            species.
          </Paragraph>
          <Paragraph>
            The pan-genome of rice is composed of the core genome and the dispensable genome. The core genome refers to the
            genomic information shared by all individuals within a species, while the dispensable genome refers to the genomic
            information that is unique to a specific individual. The core genome is relatively conserved, while the dispensable
            genome is more variable. 
          </Paragraph>
        </Col>
        <Col span={10} offset={1}>
          <img src={curve} alt="SVG" width="600" height="312" />
        </Col>
      </Row>
      

      <Row>
        <Col  span={22} offset={2}>
          <Map></Map>
        </Col>
        
        {/* <Tree></Tree> */}
      </Row>
    </>
    
    
  )
}
