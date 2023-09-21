export default function sortVcfCol (vcfCol) {

let infoCol = ['alt', 'baseCount', 'chr', 'key', 'pos', 'ref', 'refCount', 'varCount', 'var_id', 'alt_len', 'alt_end']
let sortedCol = []


  for (let i in vcfCol){
    sortedCol.push({})
    for(let e in vcfCol[i]){
      if (!infoCol.includes(e) && vcfCol[i][e] !== '0/0' && vcfCol[i][e] !== './.'){
        let alt = vcfCol[i]['alt'].split(',')
        switch (vcfCol[i][e]) {
          case '1/1':
            sortedCol[i][vcfCol[i]] = alt[0]
            break
          case '2/2':
            sortedCol[i][vcfCol[i]] = alt[1]
            break
          case '3/3':
            sortedCol[i][vcfCol[i]] = alt[2]
            break
          case '0/1' || '1/0':
            sortedCol[i][vcfCol[i]] = 'R/' + alt[0]
            break
          case '0/2' || '2/0':
            sortedCol[i][vcfCol[i]] = 'R/' + alt[1]
            break
          case '0/3' || '3/0':
            sortedCol[i][vcfCol[i]] = 'R/' + alt[2]
            break
          case '1/2' || '2/1':
            sortedCol[i][vcfCol[i]] = alt[0] + '/' + alt[1]
            break
          case '1/3' || '3/1':
            sortedCol[i][vcfCol[i]] = alt[0] + '/' + alt[2]
            break
          case '2/3' || '3/2':
            sortedCol[i][vcfCol[i]] = alt[1] + '/' + alt[2]
            break
          default:
            sortedCol[i][vcfCol[i]] = vcfCol[i][e]
            break
        }
      }
    }
  }
  return sortedCol

}