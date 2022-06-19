// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import './ERC721A.sol';

contract SampleProject2309 is ERC721A {
    constructor(address to) ERC721A('SampleProject', 'SAMPLE') {
        _mintERC2309(to, 100);
        for (uint256 i; i < 20; ++i) {
            _initializeOwnershipAt(i * 5);
        }
    }
}
