%lang starknet

from starkware.cairo.common.registers import get_label_location
from starkware.cairo.common.alloc import alloc

struct identity_token {
    name_company: felt,
    name: felt,
    name_contributuon: felt,
    id: felt,
}

func lookup_id(index: felt) -> identity_token* {
    let (addr) = get_label_location(data_start);
    return cast(addr + ((index - 1) * 4), identity_token*);

    data_start:
    dw 'Only_Dust';
    dw 'Axel';
    dw 'smartcontracts_credlancer';
    dw '1';

    //above just an example of structure, everything is modifiable
}