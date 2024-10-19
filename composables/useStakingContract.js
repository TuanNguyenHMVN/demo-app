import { Contract } from 'starknet';

// Replace these with your contract details
const contractAddress = '0x02c6a94ef010654d1a89b56c259dde224de53a64a0a491b7c0bfe8cd7d17ce68';
const contractABI = [
  {
    "type": "impl",
    "name": "LiquidStakingImpl",
    "interface_name": "stake_stark::interfaces::i_liquid_staking::ILiquidStaking"
  },
  {
    "type": "struct",
    "name": "core::integer::u256",
    "members": [
      {
        "name": "low",
        "type": "core::integer::u128"
      },
      {
        "name": "high",
        "type": "core::integer::u128"
      }
    ]
  },
  {
    "type": "enum",
    "name": "stake_stark::interfaces::i_liquid_staking::FeeStrategy",
    "variants": [
      {
        "name": "Flat",
        "type": "core::integer::u16"
      },
      {
        "name": "Tiered",
        "type": "(core::integer::u16, core::integer::u16, core::integer::u256)"
      }
    ]
  },
  {
    "type": "interface",
    "name": "stake_stark::interfaces::i_liquid_staking::ILiquidStaking",
    "items": [
      {
        "type": "function",
        "name": "deposit",
        "inputs": [
          {
            "name": "amount",
            "type": "core::integer::u256"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u256"
          }
        ],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "request_withdrawal",
        "inputs": [
          {
            "name": "shares",
            "type": "core::integer::u256"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "withdraw",
        "inputs": [],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "process_batch",
        "inputs": [],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "set_fee_strategy",
        "inputs": [
          {
            "name": "new_strategy",
            "type": "stake_stark::interfaces::i_liquid_staking::FeeStrategy"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "set_platform_fee_recipient",
        "inputs": [
          {
            "name": "recipient",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "pause",
        "inputs": [],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "unpause",
        "inputs": [],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "set_unavailability_period",
        "inputs": [
          {
            "name": "new_period",
            "type": "core::integer::u64"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "upgrade",
        "inputs": [
          {
            "name": "new_class_hash",
            "type": "core::starknet::class_hash::ClassHash"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "upgrade_delegator",
        "inputs": [
          {
            "name": "new_class_hash",
            "type": "core::starknet::class_hash::ClassHash"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "upgrade_lst",
        "inputs": [
          {
            "name": "new_class_hash",
            "type": "core::starknet::class_hash::ClassHash"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      }
    ]
  },
  {
    "type": "impl",
    "name": "LiquidStakingViewImpl",
    "interface_name": "stake_stark::interfaces::i_liquid_staking::ILiquidStakingView"
  },
  {
    "type": "struct",
    "name": "stake_stark::interfaces::i_liquid_staking::WithdrawalRequest",
    "members": [
      {
        "name": "assets",
        "type": "core::integer::u256"
      },
      {
        "name": "withdrawal_time",
        "type": "core::integer::u64"
      }
    ]
  },
  {
    "type": "interface",
    "name": "stake_stark::interfaces::i_liquid_staking::ILiquidStakingView",
    "items": [
      {
        "type": "function",
        "name": "get_lst_address",
        "inputs": [],
        "outputs": [
          {
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_delegators_address",
        "inputs": [],
        "outputs": [
          {
            "type": "core::array::Array::<core::starknet::contract_address::ContractAddress>"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_fee_strategy",
        "inputs": [],
        "outputs": [
          {
            "type": "stake_stark::interfaces::i_liquid_staking::FeeStrategy"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_platform_fee_recipient",
        "inputs": [],
        "outputs": [
          {
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_withdrawable_amount",
        "inputs": [
          {
            "name": "user",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u256"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_all_withdrawal_requests",
        "inputs": [
          {
            "name": "user",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "core::array::Array::<stake_stark::interfaces::i_liquid_staking::WithdrawalRequest>"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_available_withdrawal_requests",
        "inputs": [
          {
            "name": "user",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "core::array::Array::<(core::integer::u32, stake_stark::interfaces::i_liquid_staking::WithdrawalRequest)>"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_unavailability_period",
        "inputs": [],
        "outputs": [
          {
            "type": "core::integer::u64"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_pending_deposits",
        "inputs": [],
        "outputs": [
          {
            "type": "core::integer::u256"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_pending_withdrawals",
        "inputs": [],
        "outputs": [
          {
            "type": "core::integer::u256"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_last_processing_time",
        "inputs": [],
        "outputs": [
          {
            "type": "core::integer::u64"
          }
        ],
        "state_mutability": "view"
      }
    ]
  },
  {
    "type": "impl",
    "name": "PausableImpl",
    "interface_name": "openzeppelin_security::interface::IPausable"
  },
  {
    "type": "enum",
    "name": "core::bool",
    "variants": [
      {
        "name": "False",
        "type": "()"
      },
      {
        "name": "True",
        "type": "()"
      }
    ]
  },
  {
    "type": "interface",
    "name": "openzeppelin_security::interface::IPausable",
    "items": [
      {
        "type": "function",
        "name": "is_paused",
        "inputs": [],
        "outputs": [
          {
            "type": "core::bool"
          }
        ],
        "state_mutability": "view"
      }
    ]
  },
  {
    "type": "impl",
    "name": "RoleBasedAccessControlImpl",
    "interface_name": "stake_stark::components::access_control::IRoleBasedAccessControl"
  },
  {
    "type": "interface",
    "name": "stake_stark::components::access_control::IRoleBasedAccessControl",
    "items": [
      {
        "type": "function",
        "name": "has_role",
        "inputs": [
          {
            "name": "role",
            "type": "core::felt252"
          },
          {
            "name": "account",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "core::bool"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_role_admin",
        "inputs": [
          {
            "name": "role",
            "type": "core::felt252"
          }
        ],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "grant_role",
        "inputs": [
          {
            "name": "role",
            "type": "core::felt252"
          },
          {
            "name": "account",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "revoke_role",
        "inputs": [
          {
            "name": "role",
            "type": "core::felt252"
          },
          {
            "name": "account",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "renounce_role",
        "inputs": [
          {
            "name": "role",
            "type": "core::felt252"
          },
          {
            "name": "account",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      }
    ]
  },
  {
    "type": "constructor",
    "name": "constructor",
    "inputs": [
      {
        "name": "strk_token",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "pool_contract",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "delegator_class_hash",
        "type": "core::starknet::class_hash::ClassHash"
      },
      {
        "name": "ls_token_class_hash",
        "type": "core::starknet::class_hash::ClassHash"
      },
      {
        "name": "initial_platform_fee",
        "type": "core::integer::u16"
      },
      {
        "name": "platform_fee_recipient",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "initial_withdrawal_window_period",
        "type": "core::integer::u64"
      },
      {
        "name": "admin",
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ]
  },
  {
    "type": "event",
    "name": "stake_stark::interfaces::i_liquid_staking::Events::Deposit",
    "kind": "struct",
    "members": [
      {
        "name": "user",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      },
      {
        "name": "amount",
        "type": "core::integer::u256",
        "kind": "data"
      },
      {
        "name": "shares",
        "type": "core::integer::u256",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "stake_stark::interfaces::i_liquid_staking::Events::DelegatorWithdrew",
    "kind": "struct",
    "members": [
      {
        "name": "id",
        "type": "core::integer::u8",
        "kind": "data"
      },
      {
        "name": "delegator",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "data"
      },
      {
        "name": "amount",
        "type": "core::integer::u256",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "stake_stark::interfaces::i_liquid_staking::Events::WithdrawalRequested",
    "kind": "struct",
    "members": [
      {
        "name": "user",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "data"
      },
      {
        "name": "request_id",
        "type": "core::integer::u32",
        "kind": "data"
      },
      {
        "name": "shares",
        "type": "core::integer::u256",
        "kind": "data"
      },
      {
        "name": "assets",
        "type": "core::integer::u256",
        "kind": "data"
      },
      {
        "name": "withdrawal_time",
        "type": "core::integer::u64",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "stake_stark::interfaces::i_liquid_staking::Events::Withdraw",
    "kind": "struct",
    "members": [
      {
        "name": "user",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "data"
      },
      {
        "name": "total_assets",
        "type": "core::integer::u256",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "stake_stark::interfaces::i_liquid_staking::Events::RewardDistributed",
    "kind": "struct",
    "members": [
      {
        "name": "total_reward",
        "type": "core::integer::u256",
        "kind": "data"
      },
      {
        "name": "platform_fee_amount",
        "type": "core::integer::u256",
        "kind": "data"
      },
      {
        "name": "distributed_reward",
        "type": "core::integer::u256",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "stake_stark::interfaces::i_liquid_staking::Events::DelegatorAdded",
    "kind": "struct",
    "members": [
      {
        "name": "delegator",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      }
    ]
  },
  {
    "type": "event",
    "name": "stake_stark::interfaces::i_liquid_staking::Events::DelegatorStatusChanged",
    "kind": "struct",
    "members": [
      {
        "name": "delegator",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      },
      {
        "name": "status",
        "type": "core::bool",
        "kind": "data"
      },
      {
        "name": "available_time",
        "type": "core::integer::u64",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "stake_stark::interfaces::i_liquid_staking::Events::FeeStrategyChanged",
    "kind": "struct",
    "members": [
      {
        "name": "new_strategy",
        "type": "stake_stark::interfaces::i_liquid_staking::FeeStrategy",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "stake_stark::interfaces::i_liquid_staking::Events::DepositAddedInQueue",
    "kind": "struct",
    "members": [
      {
        "name": "amount",
        "type": "core::integer::u256",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "stake_stark::interfaces::i_liquid_staking::Events::WithdrawalAddedInQueue",
    "kind": "struct",
    "members": [
      {
        "name": "amount",
        "type": "core::integer::u256",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "stake_stark::interfaces::i_liquid_staking::Events::BatchProcessed",
    "kind": "struct",
    "members": [
      {
        "name": "net_deposit_amount",
        "type": "core::integer::u256",
        "kind": "data"
      },
      {
        "name": "net_withdrawal_amount",
        "type": "core::integer::u256",
        "kind": "data"
      },
      {
        "name": "timestamp",
        "type": "core::integer::u64",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "stake_stark::interfaces::i_liquid_staking::Events::UnavailabilityPeriodChanged",
    "kind": "struct",
    "members": [
      {
        "name": "old_period",
        "type": "core::integer::u64",
        "kind": "data"
      },
      {
        "name": "new_period",
        "type": "core::integer::u64",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleGranted",
    "kind": "struct",
    "members": [
      {
        "name": "role",
        "type": "core::felt252",
        "kind": "data"
      },
      {
        "name": "account",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "data"
      },
      {
        "name": "sender",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleRevoked",
    "kind": "struct",
    "members": [
      {
        "name": "role",
        "type": "core::felt252",
        "kind": "data"
      },
      {
        "name": "account",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "data"
      },
      {
        "name": "sender",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleAdminChanged",
    "kind": "struct",
    "members": [
      {
        "name": "role",
        "type": "core::felt252",
        "kind": "data"
      },
      {
        "name": "previous_admin_role",
        "type": "core::felt252",
        "kind": "data"
      },
      {
        "name": "new_admin_role",
        "type": "core::felt252",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::Event",
    "kind": "enum",
    "variants": [
      {
        "name": "RoleGranted",
        "type": "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleGranted",
        "kind": "nested"
      },
      {
        "name": "RoleRevoked",
        "type": "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleRevoked",
        "kind": "nested"
      },
      {
        "name": "RoleAdminChanged",
        "type": "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleAdminChanged",
        "kind": "nested"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin_security::pausable::PausableComponent::Paused",
    "kind": "struct",
    "members": [
      {
        "name": "account",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin_security::pausable::PausableComponent::Unpaused",
    "kind": "struct",
    "members": [
      {
        "name": "account",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin_security::pausable::PausableComponent::Event",
    "kind": "enum",
    "variants": [
      {
        "name": "Paused",
        "type": "openzeppelin_security::pausable::PausableComponent::Paused",
        "kind": "nested"
      },
      {
        "name": "Unpaused",
        "type": "openzeppelin_security::pausable::PausableComponent::Unpaused",
        "kind": "nested"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin_security::reentrancyguard::ReentrancyGuardComponent::Event",
    "kind": "enum",
    "variants": []
  },
  {
    "type": "event",
    "name": "openzeppelin_upgrades::upgradeable::UpgradeableComponent::Upgraded",
    "kind": "struct",
    "members": [
      {
        "name": "class_hash",
        "type": "core::starknet::class_hash::ClassHash",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin_upgrades::upgradeable::UpgradeableComponent::Event",
    "kind": "enum",
    "variants": [
      {
        "name": "Upgraded",
        "type": "openzeppelin_upgrades::upgradeable::UpgradeableComponent::Upgraded",
        "kind": "nested"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin_introspection::src5::SRC5Component::Event",
    "kind": "enum",
    "variants": []
  },
  {
    "type": "event",
    "name": "stake_stark::components::access_control::RoleBasedAccessControlComponent::Event",
    "kind": "enum",
    "variants": []
  },
  {
    "type": "event",
    "name": "stake_stark::contracts::liquid_staking::LiquidStaking::Event",
    "kind": "enum",
    "variants": [
      {
        "name": "Deposit",
        "type": "stake_stark::interfaces::i_liquid_staking::Events::Deposit",
        "kind": "nested"
      },
      {
        "name": "DelegatorWithdrew",
        "type": "stake_stark::interfaces::i_liquid_staking::Events::DelegatorWithdrew",
        "kind": "nested"
      },
      {
        "name": "WithdrawalRequested",
        "type": "stake_stark::interfaces::i_liquid_staking::Events::WithdrawalRequested",
        "kind": "nested"
      },
      {
        "name": "Withdraw",
        "type": "stake_stark::interfaces::i_liquid_staking::Events::Withdraw",
        "kind": "nested"
      },
      {
        "name": "RewardDistributed",
        "type": "stake_stark::interfaces::i_liquid_staking::Events::RewardDistributed",
        "kind": "nested"
      },
      {
        "name": "DelegatorAdded",
        "type": "stake_stark::interfaces::i_liquid_staking::Events::DelegatorAdded",
        "kind": "nested"
      },
      {
        "name": "DelegatorStatusChanged",
        "type": "stake_stark::interfaces::i_liquid_staking::Events::DelegatorStatusChanged",
        "kind": "nested"
      },
      {
        "name": "FeeStrategyChanged",
        "type": "stake_stark::interfaces::i_liquid_staking::Events::FeeStrategyChanged",
        "kind": "nested"
      },
      {
        "name": "DepositAddedInQueue",
        "type": "stake_stark::interfaces::i_liquid_staking::Events::DepositAddedInQueue",
        "kind": "nested"
      },
      {
        "name": "WithdrawalAddedInQueue",
        "type": "stake_stark::interfaces::i_liquid_staking::Events::WithdrawalAddedInQueue",
        "kind": "nested"
      },
      {
        "name": "BatchProcessed",
        "type": "stake_stark::interfaces::i_liquid_staking::Events::BatchProcessed",
        "kind": "nested"
      },
      {
        "name": "UnavailabilityPeriodChanged",
        "type": "stake_stark::interfaces::i_liquid_staking::Events::UnavailabilityPeriodChanged",
        "kind": "nested"
      },
      {
        "name": "AccessControlEvent",
        "type": "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::Event",
        "kind": "flat"
      },
      {
        "name": "PausableEvent",
        "type": "openzeppelin_security::pausable::PausableComponent::Event",
        "kind": "flat"
      },
      {
        "name": "ReentrancyGuardEvent",
        "type": "openzeppelin_security::reentrancyguard::ReentrancyGuardComponent::Event",
        "kind": "flat"
      },
      {
        "name": "UpgradeableEvent",
        "type": "openzeppelin_upgrades::upgradeable::UpgradeableComponent::Event",
        "kind": "flat"
      },
      {
        "name": "SRC5Event",
        "type": "openzeppelin_introspection::src5::SRC5Component::Event",
        "kind": "flat"
      },
      {
        "name": "RBACEvent",
        "type": "stake_stark::components::access_control::RoleBasedAccessControlComponent::Event",
        "kind": "flat"
      }
    ]
  }
]

export const useStakingContract = () => {
  const { $starknetProvider } = useNuxtApp();

  const contract = new Contract(contractABI, contractAddress, $starknetProvider);

  const stakeTokens = async (amount, account) => {
    const tx = await contract.withdraw(amount).send({ from: account });
    return tx;
  };

  const withdrawTokens = async (amount, account) => {
    const tx = await contract.withdraw(amount).send({ from: account });
    return tx;
  };

  const claimRewards = async (account) => {
    const tx = await contract.claim_reward().send({ from: account });
    return tx;
  };

  return {
    stakeTokens,
    withdrawTokens,
    claimRewards,
  };
};
