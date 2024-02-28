import { BitcoinSVG, EthSVG, RuneSVG } from "@/svg";

export const hero = {
  title: "Unlocking Crypto Potential",
  span: "21e8 Capital",
  paragraphs: [
    "21e8 Capital is a private Australian Crypto Fund trading on macro timelines, backed by a founder and CIO who has over a decade in experience in the industry. 21e8 aims to out-perform Bitcoin price action.",
    "21e8 Capital is not open to the public. General crypto information useful to bookmark is found below.",
  ],
};

export const fund = {
  title: "Fund Highlights",
  data: [
    {
      title: "Strategy",
      para: "A clear 4-year cycle exists in crypto due to Bitcoin monetary policy. 21e8 recognises that market timing entry and exit is crucial to outperforming Bitcoin price action across these cycles.",
      img: "/images/strategy-squares.png",
    },
    {
      title: "Experience",
      para: "The fund is backed a founder who has spent over a decade in the industry, with the majority of that time building, investing and growing portfolios.",
      img: "/images/bitcoin-person.png",
    },
    {
      title: "Assets",
      para: "Most liquidity is in Bitcoin, but due to the ephemeral nature of market participants, capital flows in and out of different crypto-asset verticals at different parts of the cycle.",
      img: "/images/bitcoin-graph.png",
    },
    {
      title: "Vision",
      para: "The vision of the fund is to share the wealth preservation characteristics of crypto-assets with Australian capital allocators.",
      img: "/images/phone-graph.png",
    },
  ],
};

export const assets = {
  title: "Assets",
  subtitle: "",
  para: "",
  data: [
    {
      title: "Bitcoin",
      para: `Cryptocurrency, a novel financial asset class initiated by Bitcoin's trading debut on Mt. Gox in 2010, has evolved into a sophisticated economic ecosystem. Initially conceptualised as a peer-to-peer electronic cash system, Bitcoin has predominantly become a tool for wealth preservation, adept at safeguarding value across time and space. As the
        inaugural digital monetary asset, Bitcoin catalysed numerous derivative assets,
        most of which served to underscore Bitcoin's inherent attributes before fading
        from prominence. Yet, this evolutionary process birthed two notable crypto-asset
        categories: Layer 1 Protocols and Decentralized Finance (DeFi).`,
      url: "https://www.coingecko.com/en/coins/bitcoin",
      icon: <BitcoinSVG />,
    },
    {
      title: "Layer 1",
      para: `Layer 1 Protocols, epitomised by platforms like Ethereum, Solana, and Binance
    Smart Chain, function as global computational frameworks, enabling the
    deployment of diverse applications including financial contracts and
    decentralised organisations. These protocols, often referred to as "world
    computers," facilitate narrowly-defined program executions on a global scale.
    Their monetary premium is from accrueing value from usage fees, and their longevity is
    bolstered by growing user bases and application diversification.`,
      url: "https://www.coingecko.com/en/categories/layer-1",
      icon: <EthSVG />,
    },
    {
      title: "DeFi",
      para: `DeFi, the second sustainable crypto-asset class, offers financial services for
        asset holders. Protocols in this domain, such as Uniswap, LIDO, AAVE, and
        THORChain, provide a range of services including asset swaps, savings products,
        and lending facilities. DeFi protocols generate revenue by capitalising on the
        Total Value Locked (TVL) within their systems. Emerging valuation methodologies
        for DeFi reflect their operational parallels with traditional financial
        entities, but with significantly reduced operational costs, highlighting their
        innovative edge in the financial landscape.`,
      url: "https://www.coingecko.com/en/categories/decentralized-finance-defi",
      icon: <RuneSVG />,
    },
  ],
};

export const strategy = {
  title: "Bitcoin Monetary Standard",
  subtitle:
    "Bitcoin, as a monetary standard, possesses unique qualities that set it apart",
  data: [
    {
      title: "Unforgeable Costliness",
      para: `Bitcoin mining is a competitive process where miners compete for rewards every 10 minutes. The cost of mining aligns closely with Bitcoin's market value, ensuring a fair distribution.`,
    },
    {
      title: "Strict Scarcity",
      para: "Bitcoin has a hard cap on its supply, unlike gold or fiat currencies. This fixed supply makes it an unparalleled monetary asset.",
    },
    {
      title: "Censorship Resistance",
      para: "Bitcoin allows for uncensored transactions and can be transferred globally with a memorized passphrase, unlike fiat currencies that can be heavily regulated.",
    },
    {
      title: "Global Accessibility",
      para: "Bitcoin is as liquid and accessible as USD, with some countries even adopting it as official tender, like El Salvador and Argentina.",
    },
    {
      title: "Completely Digital",
      para: "Unlike physical assets like gold, Bitcoin is a fully digital asset, immune to physical restrictions and government seizures.",
    },
    {
      title: "Infinitely Scalable",
      para: `Bitcoin's potential for economic growth is limitless due to its digital and divisible nature. It also drives technological and economic advancements, promising innovation and progress.`,
    },
  ],
};

export const bookmarks = {
  title: "Bookmarks",
  subtitle: "The following information is useful:",
  data: [
    {
      title: "Bitcoin Whitepaper",
      para: "The paper that started it all, every Bitcoin holder should read this 11-page pre-eminent document.",
      url: "https://bitcoin.org/bitcoin.pdf",
    },
    {
      title: "Bitcoin HODL Waves",
      para: "Data analysis showing waves of people holding bitcoin for ever-increasing periods of time.",
      url: "https://unchained.com/hodlwaves/",
    },
    {
      title: "Stock To Flow",
      para: "Bitcoin Stock To Flow Chart - a measure of its increasing scarcity.",
      url: "https://www.lookintobitcoin.com/charts/stock-to-flow-model/",
    },
    {
      title: "When Bitcoin Halving",
      para: "A countdown timer to the next Bitcoin Halving.",
      url: "https://buybitcoinworldwide.com/halving/",
    },
    {
      title: "Ethereum Block Explorer",
      para: "Ethereum block explorer with useful charts.",
      url: "https://etherscan.io",
    },
    {
      title: "DefiLlama",
      para: `Explore the world of Decentralised Finance.`,
      url: "https://defillama.com",
    },
  ],
};

export const social = {
  title: "",
  x: "https://x.com/21e8Capital",
  github: "https://github.com/21e8Capital",
};
