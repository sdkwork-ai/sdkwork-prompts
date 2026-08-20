use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, Clone, Default)]
pub struct AdminPromptBindingUpdateRequest {
    #[serde(rename = "promptVersionId")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub prompt_version_id: Option<serde_json::Value>,

    #[serde(rename = "ownerType")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub owner_type: Option<String>,

    #[serde(rename = "ownerId")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub owner_id: Option<i64>,

    #[serde(rename = "bindingRole")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub binding_role: Option<String>,

    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub priority: Option<i64>,

    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub enabled: Option<bool>,

    #[serde(rename = "policyJson")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub policy_json: Option<std::collections::HashMap<String, serde_json::Value>>,
}
