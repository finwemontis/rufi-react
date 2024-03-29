import React from 'react'
import '@fontsource/roboto'
import {
  createViewState,
  JBrowseLinearGenomeView,
} from '@jbrowse/react-linear-genome-view'
import assembly from './assembly'
import tracks from './tracks'
import defaultSession from './defaultSession'

export default function View() {

  console.log('this is View');
  console.log(tracks)

  const state = createViewState({
    assembly: {
      assembly
    },
    tracks: [
      tracks
    ],
    defaultSession
  })
  return <JBrowseLinearGenomeView viewState={state} />
}

// import React from "react";

// function JbApp() {
//   var features = [];
//   // Add some features
//   var config = {
//     containerID: "GenomeBrowser",
//     refSeqs: {
//       url:
//         "https://s3.amazonaws.com/1000genomes/technical/reference/GRCh38_reference_genome/GRCh38_full_analysis_set_plus_decoy_hla.fa.fai",
//     },
//     tracks: [
//       {
//         key: "GRCH38 Reference Sequence",
//         label: "GRCH38 Reference Sequence",
//         urlTemplate:
//           "https://s3.amazonaws.com/1000genomes/technical/reference/GRCh38_reference_genome/GRCh38_full_analysis_set_plus_decoy_hla.fa",
//       },
//       {
//         label: "NCBI genes",
//         urlTemplate:
//           "https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/ncbi_refseq/GCA_000001405.15_GRCh38_full_analysis_set.refseq_annotation.sorted.gff.gz",
//       },
//     ],
//     includes: null,
//   };

//   // Add to the config or tracks

//   // Instantiate JBrowse
//   window.addEventListener("load", () => {
//     window.JBrowse = new window.Browser(config);
//   });
//   return (
//     <div className="App">
//       <h1>
//         Custom JBrowse Embedded in a <code>div</code> in create-react-app
//       </h1>
//       <div
//         style={{ width: "100%", height: 800, backgroundColor: 'yellow' }}
//         className="jbrowse"
//         id="GenomeBrowser"
//       >
//         <div id="LoadingScreen">
//           <h1>Loading...</h1>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default JbApp;