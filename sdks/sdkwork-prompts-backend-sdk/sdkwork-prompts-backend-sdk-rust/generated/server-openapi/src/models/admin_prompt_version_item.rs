use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, Clone, Default)]
pub struct AdminPromptVersionItem {
    pub id: String,

    pub uuid: String,

    #[serde(rename = "tenantId")]
    pub tenant_id: String,

    #[serde(rename = "organizationId")]
    pub organization_id: String,

    #[serde(rename = "promptId")]
    pub prompt_id: String,

    #[serde(rename = "versionNo")]
    pub version_no: String,

    pub title: String,

    pub content: String,

    #[serde(rename = "lifecycleStatus")]
    pub lifecycle_status: String,

    #[serde(rename = "reviewStatus")]
    pub review_status: String,

    #[serde(rename = "checksumHash")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub checksum_hash: Option<String>,

    #[serde(rename = "variableSchema")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub variable_schema: Option<std::collections::HashMap<String, serde_json::Value>>,

    #[serde(rename = "outputSchema")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub output_schema: Option<std::collections::HashMap<String, serde_json::Value>>,

    #[serde(rename = "modelConstraints")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub model_constraints: Option<std::collections::HashMap<String, serde_json::Value>>,

    #[serde(rename = "safetyPolicy")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub safety_policy: Option<std::collections::HashMap<String, serde_json::Value>>,

    #[serde(rename = "examplesJson")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub examples_json: Option<Vec<std::collections::HashMap<String, serde_json::Value>>>,

    #[serde(rename = "createdBy")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub created_by: Option<String>,

    #[serde(rename = "publishedAt")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub published_at: Option<String>,

    #[serde(rename = "reviewComment")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub review_comment: Option<String>,

    #[serde(rename = "createdAt")]
    pub created_at: String,

    #[serde(rename = "updatedAt")]
    pub updated_at: String,
}
