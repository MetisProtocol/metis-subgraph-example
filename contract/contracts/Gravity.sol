// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

contract GravatarRegistry {
    event NewGravatar(
        uint id,
        address owner,
        string displayName,
        string imageUrl
    );
    event UpdatedGravatar(
        uint id,
        address owner,
        string displayName,
        string imageUrl
    );

    struct Gravatar {
        address owner;
        string displayName;
        string imageUrl;
    }

    Gravatar[] public gravatars;

    mapping(uint => address) public gravatarToOwner;
    mapping(address => uint) public ownerToGravatar;

    constructor() {
        gravatars.push(Gravatar(address(0x0), " ", " "));
        gravatarToOwner[0] = address(0x0);
        ownerToGravatar[address(0x0)] = 0;
        emit NewGravatar(0, address(0x0), " ", " ");
    }

    function createGravatar(
        string calldata _displayName,
        string calldata _imageUrl
    ) external {
        require(ownerToGravatar[msg.sender] == 0);

        uint256 id = gravatars.length;
        gravatars.push(Gravatar(msg.sender, _displayName, _imageUrl));
        gravatarToOwner[id] = msg.sender;
        ownerToGravatar[msg.sender] = id;
        emit NewGravatar(id, msg.sender, _displayName, _imageUrl);
    }

    function getGravatar(address owner)
        public
        view
        returns (string memory, string memory)
    {
        uint id = ownerToGravatar[owner];
        return (gravatars[id].displayName, gravatars[id].imageUrl);
    }

    function updateGravatarName(string calldata _displayName) external {
        require(ownerToGravatar[msg.sender] != 0);
        require(msg.sender == gravatars[ownerToGravatar[msg.sender]].owner);

        uint id = ownerToGravatar[msg.sender];

        gravatars[id].displayName = _displayName;
        emit UpdatedGravatar(
            id,
            msg.sender,
            _displayName,
            gravatars[id].imageUrl
        );
    }

    function updateGravatarImage(string memory _imageUrl) public {
        require(ownerToGravatar[msg.sender] != 0);
        require(msg.sender == gravatars[ownerToGravatar[msg.sender]].owner);

        uint id = ownerToGravatar[msg.sender];

        gravatars[id].imageUrl = _imageUrl;
        emit UpdatedGravatar(
            id,
            msg.sender,
            gravatars[id].displayName,
            _imageUrl
        );
    }
}
