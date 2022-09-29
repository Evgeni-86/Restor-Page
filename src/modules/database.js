/*********База данных********************/
function importAll(r) {
    return r.keys().map(r);
}
const SectionMenuImages = importAll(require.context('../img/SectionMenuImages', false, /\.(png|jpe?g|svg)$/));
const hotPositionImages = importAll(require.context('../img/hotPositionImages', false, /\.(png|jpe?g|svg)$/));
const BurgersImages = importAll(require.context('../img/BurgersImages', false, /\.(png|jpe?g|svg)$/));
const RollsImages = importAll(require.context('../img/RollsImages', false, /\.(png|jpe?g|svg)$/));

console.log(RollsImages);

let hotPositions = 
        [{article: 'ШАШЛЫК', name: 'ШАШЛЫК1', image: hotPositionImages[0]},
        {article: 'ШАШЛЫК', name: 'ШАШЛЫК2', image: hotPositionImages[1]},
        {article: 'НАГЕТСЫ', name: 'НАГЕТСЫ1', image: hotPositionImages[2]},
        {article: 'НАГЕТСЫ', name: 'НАГЕТСЫ2', image: hotPositionImages[3]},
        {article: 'РОЛЛЫ', name: 'РОЛЛЫ1', image: hotPositionImages[4]},
        {article: 'РОЛЛЫ', name: 'РОЛЛЫ2', image: hotPositionImages[5]}]

let menuPositions = 
        [{article: 'БУРГЕРЫ', name: 'бургер', image: SectionMenuImages[0]},
        {article: 'РОЛЛЫ', name: 'роллы', image: SectionMenuImages[1]}];
                
let burgers = 
        [{article: 'БУРГЕР', name: 'БУРГЕР1', image: BurgersImages[0]},
        {article: 'БУРГЕР', name: 'БУРГЕР2', image: BurgersImages[1]},
        {article: 'БУРГЕР', name: 'БУРГЕР3', image: BurgersImages[2]},
        {article: 'БУРГЕР', name: 'БУРГЕР4', image: BurgersImages[3]}]

let rolls = 
        [{article: 'РОЛЛЫ', name: 'РОЛЛЫ1', image: RollsImages[0]},
        {article: 'РОЛЛЫ', name: 'РОЛЛЫ2', image: RollsImages[1]},
        {article: 'РОЛЛЫ', name: 'РОЛЛЫ3', image: RollsImages[2]},
        {article: 'РОЛЛЫ', name: 'РОЛЛЫ4', image: RollsImages[3]}]

export{hotPositions,menuPositions,burgers, rolls};
