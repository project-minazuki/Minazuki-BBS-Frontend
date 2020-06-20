const styleGenerator = (i: number, j: number, k: string) => `${i}px ${j}px hsl(${k}, 100%, 50%)`;
const textShadow = [...new Array(400)].map((i, j) => styleGenerator(
    ~~[(j % 200 * 1.2), 120 - (j % 200 * 1.2), 120 - (j % 200 * 1.2), (j % 200 * 1.2) - 240][~~(j / 50) % 4],
    j,
    (5.4 * j).toFixed(1)
)).join();

const statement = () => setTimeout(
    console.log.bind(
        console,
        '%cProject Minazuki',
        `font-size: 100px;padding: 0 60px 60px;text-shadow:${textShadow};`,
        '\nMain developers:',
        '\n刘书哲@ymd45921 https://github.com/ymd45921',
    ),
);

export { statement };
