import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function({ getNamedAccounts, deployments }) {
  const { deploy, execute } = deployments;
  const { deployer } = await getNamedAccounts();

  const name = "GravatarRegistry";

  await deploy(name, {
    from: deployer,
    args: [],
    waitConfirmations: 1,
    log: true,
  });

  await execute(
    name,
    { from: deployer },
    "createGravatar",
    "First",
    "https://example.com/first.png"
  );

  await execute(name, { from: deployer }, "updateGravatarName", "1st");
  await execute(
    name,
    { from: deployer },
    "updateGravatarImage",
    "https://example.com/1st.png"
  );
};

func.tags = ["GravatarRegistry"];

export default func;
