
// Auto-generated type declaration for virtual-blocks
export type BlockFile = {
  name: string
  target: string
  path: string
  raw: () => Promise<string>
}

export type BlockItem = {
  className: string
  files: BlockFile[]
  component: () => Promise<any>
  raw: () => Promise<string>
}

export type BlockKey = 'team9' | 'team7' | 'team8' | 'team6' | 'team5' | 'team4' | 'team3' | 'team2' | 'team10' | 'cta4' | 'cta2' | 'team1' | 'cta1' | 'card1' | 'cta3' | 'card2' | 'logo1' | 'feature4' | 'feature2' | 'feature1' | 'footer4' | 'footer3' | 'feature3' | 'footer1' | 'footer2'

declare const blocks: Record<BlockKey, BlockItem>
export default blocks
