pub struct SipHashKey {
    /// Upper 64 bits of the SipHash key.
    k0: u64,
    /// Lower 64 bits of the SipHash key.
    k1: u64,
}

impl SipHashKey {
    pub fn new(k0: u64, k1: u64) -> Self {
        Self { k0, k1 }
    }

    pub(crate) fn get(&self) -> (u64, u64) {
        (self.k0, self.k1)
    }
}
