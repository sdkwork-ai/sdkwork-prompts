use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, Clone, Default)]
pub struct AdminPromptBindingItem {
    pub id: String,

    pub uuid: String,

    #[serde(rename = "tenantId")]
    pub tenant_id: String,

    #[serde(rename = "organizationId")]
    pub organization_id: String,

    #[serde(rename = "promptId")]
    pub prompt_id: String,

    #[serde(rename = "promptVersionId")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub prompt_version_id: Option<String>,

    #[serde(rename = "ownerType")]
    pub owner_type: String,

    #[serde(rename = "ownerId")]
    pub owner_id: String,

    #[serde(rename = "bindingRole")]
    pub binding_role: String,

    pub priority: i64,

    pub enabled: bool,

    #[serde(rename = "policyJson")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub policy_json: Option<std::collections::HashMap<String, serde_json::Value>>,

    #[serde(rename = "snapshotJson")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub snapshot_json: Option<std::collections::HashMap<String, serde_json::Value>>,

    #[serde(rename = "createdAt")]
    pub created_at: String,

    #[serde(rename = "updatedAt")]
    pub updated_at: String,
}
