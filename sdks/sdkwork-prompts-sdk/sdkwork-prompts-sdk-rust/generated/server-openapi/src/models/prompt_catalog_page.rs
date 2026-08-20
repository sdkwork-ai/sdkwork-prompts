use serde::{Deserialize, Serialize};

use crate::models::{PromptCatalogEntry};

#[derive(Serialize, Deserialize, Debug, Clone, Default)]
pub struct PromptCatalogPage {
    pub items: Vec<PromptCatalogEntry>,
}
