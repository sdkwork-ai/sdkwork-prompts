use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, Clone, Default)]
pub struct AdminPromptItem {
    pub id: String,

    pub uuid: String,

    #[serde(rename = "tenantId")]
    pub tenant_id: String,

    #[serde(rename = "organizationId")]
    pub organization_id: String,

    #[serde(rename = "promptKey")]
    pub prompt_key: String,

    pub name: String,

    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub description: Option<String>,

    #[serde(rename = "categoryId")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub category_id: Option<String>,

    #[serde(rename = "categoryCode")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub category_code: Option<String>,

    #[serde(rename = "promptType")]
    pub prompt_type: String,

    pub visibility: String,

    pub status: String,

    pub tags: Vec<String>,

    #[serde(rename = "ownerUserId")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub owner_user_id: Option<String>,

    #[serde(rename = "latestVersionId")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub latest_version_id: Option<String>,

    #[serde(rename = "publishedVersionId")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub published_version_id: Option<String>,

    #[serde(rename = "createdAt")]
    pub created_at: String,

    #[serde(rename = "updatedAt")]
    pub updated_at: String,
}
