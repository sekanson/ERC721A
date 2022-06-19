const { deployContract } = require('./helpers.js');

describe.only('ERC721A Gas Usage', function () {
  beforeEach(async function () {
    const [owner] = await ethers.getSigners();
    this.owner = owner;
  });

  it('deployNormal', async function () {
    for (let i = 0; i < 10; i++) {
      await deployContract('SampleProject', [this.owner.address]);
    }
  });

  it('deployERC2309', async function () {
    for (let i = 0; i < 10; i++) {
      await deployContract('SampleProject2309', [this.owner.address]);
    }
  });
});
